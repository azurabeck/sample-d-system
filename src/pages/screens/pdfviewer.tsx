import Link from "next/link";
import PDFViewer from "@/components/PDFViewer/src";
export default function RadioButtons() {
  const PDF = "https://www.africau.edu/images/default/sample.pdf";
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>PFW VIWER</h1>
      </div>
      <div>
        <PDFViewer url={PDF} />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
