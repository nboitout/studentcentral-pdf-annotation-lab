from fastapi import APIRouter, HTTPException

from app.models.benchmarks import BenchmarkMetadata
from app.services.benchmark_service import get_benchmark

router = APIRouter(prefix="/benchmarks", tags=["benchmarks"])


@router.get("/{doc_id}", response_model=BenchmarkMetadata)
def read_benchmark(doc_id: str) -> BenchmarkMetadata:
    benchmark = get_benchmark(doc_id)
    if benchmark is None:
        raise HTTPException(status_code=404, detail="Benchmark not found")

    return benchmark
