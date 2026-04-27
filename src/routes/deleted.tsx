import { createFileRoute } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/deleted")({
  head: () => ({ meta: [{ title: "Deleted Items — Hope, Inc. HR" }] }),
  component: DeletedPage,
});

function DeletedPage() {
  return (
    <AppShell title="Deleted Items">
      <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center shadow-card">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
          <Trash2 className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold">Deleted Items</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Soft-deleted records will appear here. Visibility & restore logic ships in
          <span className="mx-1 inline-block rounded bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
            Sprint 2
          </span>
          .
        </p>
      </div>
    </AppShell>
  );
}
