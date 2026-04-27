import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Hope, Inc. HR" }] }),
  component: () => (
    <PlaceholderPage
      title="Admin"
      description="Manage roles, permissions and system access."
      icon={ShieldCheck}
      columns={["User", "Role", "Last Active", "Status"]}
      rows={[
        { User: "Alex Morgan", Role: "Super Admin", "Last Active": "Just now", Status: "Active" },
        { User: "Priya Patel", Role: "HR Admin", "Last Active": "2h ago", Status: "Active" },
        { User: "Jordan Reed", Role: "Manager", "Last Active": "1d ago", Status: "Active" },
      ]}
    />
  ),
});
