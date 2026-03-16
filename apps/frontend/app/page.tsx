import Link from "next/link";

export default function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border/70 bg-card/90 p-8 shadow-[0_18px_60px_rgba(77,52,24,0.08)]">
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">SOSO frontend architecture</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Tenant-scoped modular monolith</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          Domain modules now live behind organization-scoped routes, backed by a typed module registry, shared platform context, and module-owned screens and service clients.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" href="/org/acme-corp">
            Open tenant workspace
          </Link>
          <Link className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium" href="/ui-showcase">
            Open UI showcase
          </Link>
        </div>
      </div>
    </div>
  );
}
