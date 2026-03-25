from pydantic import BaseModel


class BenchmarkDocument(BaseModel):
    id: str
    title: str
    pdfUrl: str
    totalPages: int | None = None
    description: str | None = None
