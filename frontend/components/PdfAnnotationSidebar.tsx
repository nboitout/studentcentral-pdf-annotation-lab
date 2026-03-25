"use client";

import { Annotation } from "@/lib/types";

type Props = {
  annotations: Annotation[];
};

export default function PdfAnnotationSidebar({ annotations }: Props) {
  return (
    <aside style={{ width: 320, borderLeft: "1px solid #ddd", padding: 16, overflowY: "auto" }}>
      <h3>Annotations</h3>
      {annotations.length === 0 ? (
        <p>No annotations for this page.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {annotations.map((item) => (
            <li key={item.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 10 }}>
              <strong>{item.role}</strong>
              <p style={{ margin: "8px 0" }}>{item.text}</p>
              <small>{item.explanation}</small>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
