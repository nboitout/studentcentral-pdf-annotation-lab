export type AnnotationKind = "underline" | "highlight" | "circle" | "region";

export type AnnotationRole =
  | "core-claim"
  | "definition"
  | "workflow"
  | "evidence"
  | "result"
  | "prompt-block";

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Annotation = {
  id: string;
  page: number;
  kind: AnnotationKind;
  role: AnnotationRole;
  rect: Rect;
  text: string;
  explanation: string;
};

export type BenchmarkMetadata = {
  doc_id: string;
  title: string;
  source_url: string;
  pdf_path: string;
  total_pages: number;
};
