import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Users, Briefcase, Building2, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Hope, Inc. HR" }] }),
  component: Dashboard,
});

const stats = [
  { label: "Employees", value: "248", delta: "+12", icon: Users },
  { label: "Open Jobs", value: "14", delta: "+3", icon: Briefcase },
  { label: "Departments", value: "9", delta: "0", icon: Building2 },
  { label: "Retention", value: "94%", delta: "+1.2%", icon: TrendingUp },
];

const recent = [
  { name: "Maya Chen", role: "Senior Designer", dept: "Design", date: "Apr 22" },
  { name: "Jordan Reed", role: "Backend Engineer", dept: "Engineering", date: "Apr 20" },
  { name: "Priya Patel", role: "HR Specialist", dept: "People Ops", date: "Apr 18" },
  { name: "Liam O'Connor", role: "Account Executive", dept: "Sales", date: "Apr 16" },
];

function Dashboard() {
  return (
    <AppShell title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold">{s.value}</span>
              <span className="text-xs font-medium text-success">{s.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Recently onboarded</h2>
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr><th className="py-2">Name</th><th>Role</th><th>Department</th><th>Joined</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recent.map((r) => (
                  <tr key={r.name}>
                    <td className="py-3 font-medium">{r.name}</td>
                    <td className="text-muted-foreground">{r.role}</td>
                    <td className="text-muted-foreground">{r.dept}</td>
                    <td className="text-muted-foreground">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold">Quick actions</h2>
          <div className="mt-4 space-y-2">
            {["Add employee", "Create job posting", "Run report", "Invite admin"].map((a) => (
              <button key={a} className="flex w-full items-center justify-between rounded-md border border-border px-3 py-2 text-left text-sm hover:bg-secondary">
                {a} <span className="text-muted-foreground">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
