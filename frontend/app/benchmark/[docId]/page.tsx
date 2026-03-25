import PdfBenchmarkViewer from "@/components/PdfBenchmarkViewer";
import { getBenchmark } from "@/lib/api";

export default async function BenchmarkPage({ params }: { params: { docId: string } }) {
  const benchmark = await getBenchmark(params.docId);

  return <PdfBenchmarkViewer benchmark={benchmark} />;
}
