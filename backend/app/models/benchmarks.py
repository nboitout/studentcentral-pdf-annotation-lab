from pydantic import BaseModel


class BenchmarkMetadata(BaseModel):
    doc_id: str
    title: str
    source_url: str
    pdf_path: str
    total_pages: int
