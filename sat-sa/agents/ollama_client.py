"""
ollama_client.py -- Lightweight, RAM-optimized Ollama client for Qwen 3.5 4B.
Enforces strict context window (2048), generation limits (256), temperature (0.1),
and keep_alive (5m) to operate reliably within an 8 GB Windows host.
"""

from __future__ import annotations

import json
import os
import time
import urllib.error
import urllib.request
from typing import Any, Dict, Optional


class OllamaClientError(Exception):
    """Base exception for Ollama client errors."""
    pass


class OllamaUnavailableError(OllamaClientError):
    """Raised when Ollama daemon is unreachable or model is not loaded."""
    pass


class OllamaClient:
    def __init__(
        self,
        base_url: Optional[str] = None,
        model: Optional[str] = None,
        timeout_seconds: float = 60.0,
    ):
        self.base_url = (base_url or os.getenv("OLLAMA_API_URL", "http://localhost:11434")).rstrip("/")
        self.model = model or os.getenv("OLLAMA_MODEL", "qwen3.5:4b")
        self.timeout_seconds = timeout_seconds

    def is_available(self) -> bool:
        """Check if Ollama service is reachable."""
        try:
            req = urllib.request.Request(f"{self.base_url}/api/tags", headers={"User-Agent": "SAT-SA-Agent/1.0"})
            with urllib.request.urlopen(req, timeout=3.0) as resp:
                return resp.status == 200
        except Exception:
            return False

    def generate(
        self,
        prompt: str,
        system_prompt: Optional[str] = None,
        num_ctx: int = 2048,
        num_predict: int = 128,
        temperature: float = 0.1,
        keep_alive: str = "5m",
        format_json: bool = True,
        think: bool = False,
    ) -> Dict[str, Any]:
        """
        Executes exactly ONE single-pass completion against the local Ollama instance.
        Disables reasoning loop (think: False) by default to prevent token exhaustion on CPU.
        """
        payload: Dict[str, Any] = {
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "keep_alive": keep_alive,
            "think": think,
            "options": {
                "num_ctx": num_ctx,
                "num_predict": num_predict,
                "temperature": temperature,
            },
        }

        if format_json:
            payload["format"] = "json"

        if system_prompt:
            payload["system"] = system_prompt

        data_bytes = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            f"{self.base_url}/api/generate",
            data=data_bytes,
            headers={"Content-Type": "application/json", "User-Agent": "SAT-SA-Agent/1.0"},
            method="POST",
        )

        t0 = time.time()
        try:
            with urllib.request.urlopen(req, timeout=self.timeout_seconds) as resp:
                if resp.status != 200:
                    raise OllamaClientError(f"Ollama returned HTTP status {resp.status}")
                body = resp.read().decode("utf-8")
                res = json.loads(body)
                latency = round(time.time() - t0, 3)
                res["client_latency_seconds"] = latency

                # Handle response vs thinking fields: if response is empty, check thinking
                if not res.get("response") and res.get("thinking"):
                    # If model placed JSON inside thinking block
                    res["response"] = res["thinking"]

                return res
        except (urllib.error.URLError, TimeoutError) as e:
            raise OllamaUnavailableError(f"Ollama service unreachable at {self.base_url}: {e}") from e
        except json.JSONDecodeError as e:
            raise OllamaClientError(f"Failed to parse Ollama JSON response: {e}") from e


# Shared singleton instance
_GLOBAL_CLIENT: Optional[OllamaClient] = None


def get_shared_ollama_client() -> OllamaClient:
    global _GLOBAL_CLIENT
    if _GLOBAL_CLIENT is None:
        _GLOBAL_CLIENT = OllamaClient()
    return _GLOBAL_CLIENT
