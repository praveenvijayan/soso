import Link from "next/link";
import { ArrowRight, Building2, KeyRound, ShieldCheck } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(180,112,43,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(231,201,145,0.2),transparent_32%)]" />
      <div className="pointer-events-none absolute left-[-7rem] top-40 h-72 w-72 rounded-full bg-[rgba(180,112,43,0.08)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-24 h-72 w-72 rounded-full bg-[rgba(231,201,145,0.12)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-sm font-semibold">S</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">SOSO</p>
              <p className="text-xs text-muted-foreground">Strategy Operating System for Organizations</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.1fr)_440px]">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                Secure workspace access
              </Badge>
              <h1 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                Sign in to manage strategy across every domain module.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                Access tenant-scoped planning, governance, risk, finance, and platform workflows through one shared operating system with organization-aware permissions and session context.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/70 bg-card/80">
                <CardContent className="space-y-3 p-5">
                  <Building2 className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">Tenant-aware</div>
                  <p className="text-sm text-muted-foreground">Every session resolves the active organization, membership, and module access.</p>
                </CardContent>
              </Card>
              <Card className="border-border/70 bg-card/80">
                <CardContent className="space-y-3 p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">Policy-backed</div>
                  <p className="text-sm text-muted-foreground">Permissions, approvals, comments, and notifications run through the shared platform layer.</p>
                </CardContent>
              </Card>
              <Card className="border-border/70 bg-card/80">
                <CardContent className="space-y-3 p-5">
                  <KeyRound className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">Single entry</div>
                  <p className="text-sm text-muted-foreground">Login is the landing surface for all domain modules and tenant workflows.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="overflow-hidden border-border/70 bg-card/95 shadow-[0_24px_80px_rgba(77,52,24,0.12)]">
            <CardContent className="p-7">
              <div className="mb-8 space-y-2">
                <p className="text-2xl font-semibold tracking-tight">Login</p>
                <p className="text-sm text-muted-foreground">
                  Use your organization credentials to enter the tenant workspace.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="john@acmecorp.com" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                      Forgot password
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <Button asChild className="w-full">
                    <Link href="/org/acme-corp">
                      Sign in
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">Continue with SSO</Button>
                </div>
              </form>

              <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>Creating a new tenant?</span>
                <Link href="/signup" className="font-medium text-foreground underline-offset-4 hover:underline">
                  Set up your organization
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Demo entry</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the tenant workspace route for the current implementation scaffold.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link href="/org/acme-corp" className="text-sm font-medium underline-offset-4 hover:underline">
                    Open `acme-corp`
                  </Link>
                  <Link href="/ui-showcase" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
                    UI showcase
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
