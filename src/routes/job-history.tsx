import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/job-history")({
  head: () => ({ meta: [{ title: "Job History — Hope, Inc. HR" }] }),
  component: () => (
    <PlaceholderPage
      title="Job History"
      description="Track role changes, promotions and transitions over time."
      icon={History}
      columns={["Employee", "From", "To", "Effective", "Reason"]}
      rows={[
        { Employee: "Maya Chen", From: "Designer", To: "Sr. Designer", Effective: "2024-11-01", Reason: "Promotion" },
        { Employee: "Jordan Reed", From: "Backend Eng.", To: "Tech Lead", Effective: "2025-01-15", Reason: "Promotion" },
        { Employee: "Liam O'Connor", From: "SDR", To: "AE", Effective: "2024-08-10", Reason: "Transfer" },
      ]}
    />
  ),
});
