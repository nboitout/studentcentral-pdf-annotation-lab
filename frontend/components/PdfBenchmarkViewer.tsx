"use client";

import { pdfjs, Document } from "react-pdf";
import { useEffect, useMemo, useState } from "react";

import { getAnnotations } from "@/lib/api";
import { Annotation, BenchmarkMetadata } from "@/lib/types";

import PdfAnnotationOverlay from "./PdfAnnotationOverlay";
import PdfAnnotationSidebar from "./PdfAnnotationSidebar";
import PdfCanvas from "./PdfCanvas";
import PdfToolbar from "./PdfToolbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  benchmark: BenchmarkMetadata;
};

export default function PdfBenchmarkViewer({ benchmark }: Props) {
  const [page, setPage] = useState(1);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [pdfError, setPdfError] = useState<string | null>(null);

  useEffect(() => {
    getAnnotations(benchmark.doc_id, page)
      .then(setAnnotations)
      .catch(() => setAnnotations([]));
  }, [benchmark.doc_id, page]);

  const pdfUrl = useMemo(() => `http://127.0.0.1:8000${benchmark.pdf_path}`, [benchmark.pdf_path]);

  return (
    <section style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <PdfToolbar
        page={page}
        totalPages={benchmark.total_pages}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => Math.min(benchmark.total_pages, p + 1))}
      />
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <main style={{ flex: 1, padding: 16, overflow: "auto", display: "grid", justifyItems: "center" }}>
          <div style={{ position: "relative", width: 800, maxWidth: "100%" }}>
            {pdfError ? (
              <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, background: "#fff" }}>
                <p style={{ marginTop: 0 }}><strong>PDF is not available in this branch.</strong></p>
                <p style={{ marginBottom: 8 }}>Expected file: <code>{benchmark.pdf_path}</code></p>
                <p style={{ margin: 0 }}>Add <code>swe-ci.pdf</code> manually under <code>samples/arxiv/</code> after merge.</p>
              </div>
            ) : (
              <Document
                file={pdfUrl}
                loading={<p>Loading PDF...</p>}
                onLoadError={(err) => setPdfError(err.message)}
              >
                <PdfCanvas pageNumber={page} width={800} />
              </Document>
            )}
            <PdfAnnotationOverlay annotations={annotations} />
          </div>
        </main>
        <PdfAnnotationSidebar annotations={annotations} />
      </div>
    </section>
  );
}
