import { DocumentChecklist } from "@/components/document-checklist";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Document Checklist | MiddleOrbit Overseas",
  description: "Select your job type and instantly see the documents required for overseas processing.",
  slug: "/document-checklist",
  keywords: ["document checklist manpower", "overseas job documents"]
});

export default function DocumentChecklistPage() {
  return (
    <div className="page-shell py-10">
      <DocumentChecklist />
    </div>
  );
}

