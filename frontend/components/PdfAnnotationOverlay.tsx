"use client";

import { Annotation } from "@/lib/types";

type Props = {
  annotations: Annotation[];
};

function colorForKind(kind: Annotation["kind"]) {
  switch (kind) {
    case "highlight":
      return "rgba(255, 230, 0, 0.35)";
    case "underline":
      return "rgba(255, 0, 0, 0.65)";
    case "circle":
      return "rgba(0, 114, 255, 0.3)";
    case "region":
      return "rgba(33, 150, 83, 0.2)";
  }
}

export default function PdfAnnotationOverlay({ annotations }: Props) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {annotations.map((annotation) => (
        <div
          key={annotation.id}
          style={{
            position: "absolute",
            left: `${annotation.rect.x * 100}%`,
            top: `${annotation.rect.y * 100}%`,
            width: `${annotation.rect.width * 100}%`,
            height: `${annotation.rect.height * 100}%`,
            border: annotation.kind === "underline" ? "none" : "1px solid rgba(0,0,0,0.4)",
            borderBottom: annotation.kind === "underline" ? "3px solid rgba(255,0,0,0.8)" : undefined,
            borderRadius: annotation.kind === "circle" ? "999px" : "2px",
            backgroundColor: colorForKind(annotation.kind)
          }}
          title={annotation.explanation}
        />
      ))}
    </div>
  );
}
