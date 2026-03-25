import json
from pathlib import Path

from app.models.annotations import Annotation

_FIXTURE_DIR = Path(__file__).resolve().parent.parent / "fixtures"


def get_annotations(doc_id: str, page: int) -> list[Annotation]:
    fixture_path = _FIXTURE_DIR / f"annotations_{doc_id}_page_{page}.json"
    if not fixture_path.exists():
        return []

    payload = json.loads(fixture_path.read_text())
    return [Annotation.model_validate(item) for item in payload]
