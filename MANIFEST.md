# Transfer Manifest

## Current branch
`codex/sprint1-pdf-annotation`

## Latest commit hash
`<self-referential: run git rev-parse HEAD on transfer target>`

## Top-level file tree
- `.git/`
- `.gitignore`
- `README.md`
- `backend/`
- `docs/`
- `frontend/`
- `samples/`

## Changed files since initial scaffold baseline
Baseline used: `fbd3e30` (`Add files via upload`).

- `.gitignore`
- `README.md`
- `annotation_service.py`
- `backend/.gitkeep`
- `backend/app/fixtures/annotations_swe-ci_page_1.json`
- `backend/app/fixtures/annotations_swe-ci_page_3.json`
- `backend/app/fixtures/annotations_swe-ci_page_5.json`
- `backend/app/fixtures/benchmark_swe-ci.json`
- `backend/app/main.py`
- `backend/app/models/annotations.py`
- `backend/app/models/benchmarks.py`
- `backend/app/routers/annotations.py`
- `backend/app/routers/benchmarks.py`
- `backend/app/services/annotation_service.py`
- `backend/app/services/benchmark_service.py`
- `backend/requirements.txt`
- `benchmark_service.py`
- `benchmarks (1).py`
- `docs/.gitkeep`
- `docs/benchmark-arxiv.md`
- `docs/experiments.md`
- `docs/roadmap.md`
- `env.example`
- `frontend/.gitkeep`
- `frontend/app/benchmark/[docId]/page.tsx`
- `frontend/app/layout.tsx`
- `frontend/app/page.tsx`
- `frontend/components/PdfAnnotationOverlay.tsx`
- `frontend/components/PdfAnnotationSidebar.tsx`
- `frontend/components/PdfBenchmarkViewer.tsx`
- `frontend/components/PdfCanvas.tsx`
- `frontend/components/PdfToolbar.tsx`
- `frontend/lib/api.ts`
- `frontend/lib/types.ts`
- `frontend/next-env.d.ts`
- `frontend/next.config.js`
- `frontend/package-lock.json`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `page-1.json`
- `page-3.json`
- `page-5.json`
- `samples/arxiv/.gitkeep`
- `samples/arxiv/swe-ci.pdf`

## Validation commands run
- `git status --short`
- `git branch --show-current`
- `git rev-parse HEAD`
- `find . -maxdepth 1 -mindepth 1 -printf '%P\n' | sort`
- `git diff --name-only fbd3e30..HEAD`
- `git archive --format=zip --output /workspace/studentcentral-pdf-annotation-lab-codex-sprint1-pdf-annotation-transfer.zip HEAD`
- Python verification script comparing `git ls-tree -r --name-only HEAD` against zip entries and validating blob hash equality for all archived files.

## Blockers / assumptions
- Assumption: "initial scaffold" refers to baseline commit `fbd3e30`.
- No push/PR actions were performed by request.
- Archive captures tracked files exactly at `HEAD` (not untracked working files).
