"use client";

import { Page } from "react-pdf";

type Props = {
  pageNumber: number;
  width: number;
};

export default function PdfCanvas({ pageNumber, width }: Props) {
  return <Page pageNumber={pageNumber} width={width} renderTextLayer={false} renderAnnotationLayer={false} />;
}
