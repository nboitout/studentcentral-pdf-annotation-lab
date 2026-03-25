from fastapi import APIRouter

from app.models.annotations import PageAnnotationsResponse
from app.services.annotation_service import get_page_annotations

router = APIRouter(prefix="/annotations", tags=["annotations"])


@router.get("/{doc_id}/pages/{page}", response_model=PageAnnotationsResponse)
def read_page_annotations(doc_id: str, page: int):
    return get_page_annotations(doc_id, page)
