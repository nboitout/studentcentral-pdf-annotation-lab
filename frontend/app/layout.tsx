import type { ReactNode } from "react";

export const metadata = {
  title: "StudentCentral PDF Annotation Lab",
  description: "Sprint 1 scaffold"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
