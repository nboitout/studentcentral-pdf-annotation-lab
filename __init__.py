from typing import Literal
from pydantic import BaseModel


AnnotationRole = Literal[
    "core-claim",
    "definition",
    "workflow",
    "evidence",
    "result",
    "prompt-block",
]

AnnotationKind = Literal["underline", "highlight", "circle", "region"]


class AnnotationRect(BaseModel):
    x: float
    y: float
    width: float
    height: float


class PdfAnnotation(BaseModel):
    id: str
    page: int
    kind: AnnotationKind
    role: AnnotationRole
    anchorText: str
    comment: str
    rects: list[AnnotationRect]


class PageAnnotationsResponse(BaseModel):
    documentId: str
    page: int
    annotations: list[PdfAnnotation]
