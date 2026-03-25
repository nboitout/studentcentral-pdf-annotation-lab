from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers.annotations import router as annotations_router
from app.routers.benchmarks import router as benchmarks_router

app = FastAPI(title="StudentCentral PDF Annotation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(benchmarks_router)
app.include_router(annotations_router)

samples_dir = Path(__file__).resolve().parents[2] / "samples"
app.mount("/samples", StaticFiles(directory=samples_dir), name="samples")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
