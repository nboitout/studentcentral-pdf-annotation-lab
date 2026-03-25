import json
from pathlib import Path

from app.models.benchmarks import BenchmarkMetadata

_FIXTURE_DIR = Path(__file__).resolve().parent.parent / "fixtures"


def get_benchmark(doc_id: str) -> BenchmarkMetadata | None:
    fixture_path = _FIXTURE_DIR / f"benchmark_{doc_id}.json"
    if not fixture_path.exists():
        return None

    payload = json.loads(fixture_path.read_text())
    return BenchmarkMetadata.model_validate(payload)
