from fastapi import APIRouter

from app.models.annotations import Annotation
from app.services.annotation_service import get_annotations

router = APIRouter(prefix="/annotations", tags=["annotations"])


@router.get("/{doc_id}/pages/{page}", response_model=list[Annotation])
def read_annotations(doc_id: str, page: int) -> list[Annotation]:
    return get_annotations(doc_id, page)
