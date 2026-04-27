import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Briefcase, Building2, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hope, Inc. — HR System" },
      {
        name: "description",
        content: "Manage employees, jobs, departments and more with the Hope, Inc. HR System.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background bg-hero">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground font-bold">
            H
          </div>
          <span className="font-display text-lg font-semibold">Hope, Inc.</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-1 rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-95"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            Hope, Inc. HR Platform
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            People operations,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              beautifully simple.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Manage employees, job history, departments and admin tasks from a single
            modern workspace built for growing teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Sign in to dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              Create account
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, title: "Employees", desc: "Central directory & profiles" },
            { icon: Briefcase, title: "Jobs", desc: "Roles & compensation bands" },
            { icon: Building2, title: "Departments", desc: "Org structure made clear" },
            { icon: ShieldCheck, title: "Admin", desc: "Roles, access & audit" },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hope, Inc. HR System
      </footer>
    </div>
  );
}
