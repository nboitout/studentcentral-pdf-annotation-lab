from typing import Literal

from pydantic import BaseModel, Field

AnnotationKind = Literal["underline", "highlight", "circle", "region"]
AnnotationRole = Literal[
    "core-claim",
    "definition",
    "workflow",
    "evidence",
    "result",
    "prompt-block",
]


class AnnotationRect(BaseModel):
    x: float = Field(..., ge=0, le=1)
    y: float = Field(..., ge=0, le=1)
    width: float = Field(..., gt=0, le=1)
    height: float = Field(..., gt=0, le=1)


class Annotation(BaseModel):
    id: str
    page: int = Field(..., ge=1)
    kind: AnnotationKind
    role: AnnotationRole
    rect: AnnotationRect
    text: str
    explanation: str
