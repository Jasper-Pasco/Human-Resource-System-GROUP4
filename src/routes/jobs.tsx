import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/jobs")({
  head: () => ({ meta: [{ title: "Jobs — Hope, Inc. HR" }] }),
  component: () => (
    <PlaceholderPage
      title="Jobs"
      description="Roles, levels and compensation bands across the company."
      icon={Briefcase}
      columns={["Title", "Code", "Department", "Level", "Salary Range"]}
      rows={[
        { Title: "Software Engineer", Code: "ENG-002", Department: "Engineering", Level: "L3", "Salary Range": "$90k – $120k" },
        { Title: "Product Designer", Code: "DSN-001", Department: "Design", Level: "L3", "Salary Range": "$85k – $115k" },
        { Title: "HR Specialist", Code: "HR-001", Department: "People Ops", Level: "L2", "Salary Range": "$60k – $80k" },
        { Title: "Account Executive", Code: "SAL-003", Department: "Sales", Level: "L3", "Salary Range": "$70k – $95k + comm." },
      ]}
    />
  ),
});
