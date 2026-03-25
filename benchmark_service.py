from fastapi import APIRouter, HTTPException

from app.models.benchmarks import BenchmarkDocument
from app.services.benchmark_service import get_benchmark

router = APIRouter(prefix="/benchmarks", tags=["benchmarks"])


@router.get("/{doc_id}", response_model=BenchmarkDocument)
def read_benchmark(doc_id: str):
    try:
        return get_benchmark(doc_id)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
