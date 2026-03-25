import { Annotation, BenchmarkMetadata } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export async function getBenchmark(docId: string): Promise<BenchmarkMetadata> {
  const res = await fetch(`${API_BASE}/benchmarks/${docId}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Unable to fetch benchmark ${docId}`);
  }

  return res.json();
}

export async function getAnnotations(docId: string, page: number): Promise<Annotation[]> {
  const res = await fetch(`${API_BASE}/annotations/${docId}/pages/${page}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Unable to fetch annotations for ${docId} page ${page}`);
  }

  return res.json();
}
