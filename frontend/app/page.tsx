import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>StudentCentral PDF Annotation Lab</h1>
      <p>Open the benchmark viewer:</p>
      <Link href="/benchmark/swe-ci">/benchmark/swe-ci</Link>
    </main>
  );
}
