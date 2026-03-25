# studentcentral-pdf-annotation-lab

Sprint 1 scaffold for the StudentCentral PDF Annotation Lab.

## Monorepo layout

- `frontend/` — Next.js 14 + TypeScript benchmark viewer
- `backend/` — FastAPI fixture-backed API
- `samples/arxiv/README.md` — placeholder instructions for adding `swe-ci.pdf` manually
- `docs/` — roadmap and benchmark docs

## Run backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000