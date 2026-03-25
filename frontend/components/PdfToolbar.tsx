"use client";

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function PdfToolbar({ page, totalPages, onPrev, onNext }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", borderBottom: "1px solid #ddd" }}>
      <button onClick={onPrev} disabled={page <= 1}>
        Previous
      </button>
      <button onClick={onNext} disabled={page >= totalPages}>
        Next
      </button>
      <span>
        Page {page} / {totalPages}
      </span>
    </div>
  );
}
