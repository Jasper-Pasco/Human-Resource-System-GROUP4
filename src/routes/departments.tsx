import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/departments")({
  head: () => ({ meta: [{ title: "Departments — Hope, Inc. HR" }] }),
  component: () => (
    <PlaceholderPage
      title="Departments"
      description="Organizational units and their managers."
      icon={Building2}
      columns={["Department", "Manager", "Headcount", "Location"]}
      rows={[
        { Department: "Engineering", Manager: "Jordan Reed", Headcount: "62", Location: "Remote" },
        { Department: "Design", Manager: "Maya Chen", Headcount: "18", Location: "NYC" },
        { Department: "People Ops", Manager: "Priya Patel", Headcount: "9", Location: "NYC" },
        { Department: "Sales", Manager: "Liam O'Connor", Headcount: "41", Location: "Remote" },
        { Department: "Marketing", Manager: "Sara Kim", Headcount: "23", Location: "LA" },
      ]}
    />
  ),
});
