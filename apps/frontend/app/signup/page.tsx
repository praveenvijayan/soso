import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDashed,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const launchPoints = [
  "Provision one shared strategy workspace for leadership, governance, and execution teams.",
  "Establish an organization slug, admin access, and core operating model from day one.",
  "Start with a guided tenant setup instead of assembling modules one by one.",
];

const proofPoints = [
  {
    title: "Governance-first setup",
    description: "Capture ownership, decision cadence, and organization scale before modules go live.",
    icon: ShieldCheck,
  },
  {
    title: "Built for cross-functional rollout",
    description: "Finance, risk, strategy, and platform teams can start from the same organizational spine.",
    icon: Layers3,
  },
  {
    title: "Admin control from minute one",
    description: "The first account becomes the tenant owner with immediate access to invite and configure.",
    icon: Users2,
  },
];

export default function SignupPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,rgba(241,240,235,0.94)_0%,rgba(249,248,245,1)_42%,rgba(255,255,255,1)_100%)] text-foreground dark:bg-[linear-gradient(180deg,rgba(34,34,32,1)_0%,rgba(26,26,24,1)_48%,rgba(18,18,17,1)_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,200,66,0.22),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(184,146,43,0.18),transparent_24%),linear-gradient(135deg,transparent_0%,rgba(28,28,26,0.03)_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(245,200,66,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(245,200,66,0.12),transparent_18%),linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(28,28,26,0.12),transparent)] lg:block dark:bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[10%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(28,28,26,0.08),transparent)] lg:block dark:bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 md:px-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_40px_rgba(184,146,43,0.28)]">
              <span className="text-sm font-semibold tracking-[0.18em]">SO</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-muted-foreground">SOSO</p>
              <p className="max-w-[18rem] text-sm leading-5 text-foreground/80">
                Strategy Operating System for organizations
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden rounded-full px-4 text-sm md:inline-flex">
              <Link href="/">Sign in</Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <main className="grid flex-1 gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,500px)] lg:items-center lg:gap-16">
          <section className="space-y-10">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="rounded-full border-black/10 bg-white/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] dark:border-white/10 dark:bg-white/5"
              >
                Organization launch
              </Badge>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.26em] text-muted-foreground">
                  Structured intake for new tenants
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
                  Build the control room before the strategy work begins.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-foreground/72 md:text-lg">
                  Create your organization workspace, appoint the first workspace owner, and establish the operating
                  context that SOSO uses across strategy, finance, governance, and risk.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {proofPoints.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-[2rem] border border-black/8 bg-white/75 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(245,200,66,0.18)] text-[rgb(120,88,23)] dark:bg-[rgba(245,200,66,0.16)] dark:text-[rgb(245,220,142)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold tracking-[-0.03em]">{title}</h2>
                    <p className="text-sm leading-6 text-foreground/68">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.56)] p-6 shadow-[0_24px_80px_rgba(77,52,24,0.08)] backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  What gets configured
                </div>
                <div className="space-y-4">
                  {launchPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[rgb(133,98,24)] dark:text-[rgb(245,220,142)]" />
                      <p className="text-sm leading-6 text-foreground/74">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(28,28,26,0.96),rgba(46,46,44,0.96))] p-5 text-[rgb(237,236,232)] dark:border-white/10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[rgba(237,236,232,0.55)]">Preview</p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">Workspace baseline</p>
                  </div>
                  <CircleDashed className="h-5 w-5 text-[rgba(245,200,66,0.86)]" />
                </div>
                <div className="space-y-4 text-sm text-[rgba(237,236,232,0.78)]">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                    <span>Tenant slug</span>
                    <span className="font-medium text-[rgba(245,200,66,0.96)]">acme-holdings</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                    <span>Initial modules</span>
                    <span className="font-medium">Core platform</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                    <span>Owner role</span>
                    <span className="font-medium">Organization admin</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[rgba(245,200,66,0.16)] blur-3xl dark:bg-[rgba(245,200,66,0.14)]" />
            <div className="rounded-[2.5rem] border border-black/8 bg-[rgba(255,255,255,0.86)] p-6 shadow-[0_30px_100px_rgba(77,52,24,0.12)] backdrop-blur-xl md:p-8 dark:border-white/10 dark:bg-[rgba(34,34,32,0.86)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.34)]">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Create organization</p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em]">Set up the first workspace owner.</h2>
                <p className="text-sm leading-6 text-foreground/70">
                  This profile becomes the initial organization administrator and can invite the rest of the team after
                  setup.
                </p>
              </div>

              <form className="mt-8 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="organization-name">Organization name</Label>
                    <Input
                      id="organization-name"
                      placeholder="Northstar Advisory Group"
                      className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workspace-slug">Workspace slug</Label>
                    <Input
                      id="workspace-slug"
                      placeholder="northstar-advisory"
                      className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-size">Organization size</Label>
                    <Select>
                      <SelectTrigger
                        id="org-size"
                        className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <SelectValue placeholder="Select employee range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-250">51-250 employees</SelectItem>
                        <SelectItem value="251-1000">251-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-name">Administrator name</Label>
                    <Input
                      id="admin-name"
                      placeholder="Jane Doe"
                      className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Work email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="jane@northstar.com"
                      className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region">Primary region</Label>
                    <Select>
                      <SelectTrigger
                        id="region"
                        className="h-12 rounded-2xl border-black/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <SelectValue placeholder="Choose a region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mea">Middle East & Africa</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="north-america">North America</SelectItem>
                        <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-dashed border-black/10 bg-[rgba(245,200,66,0.08)] p-5 dark:border-white/10 dark:bg-[rgba(245,200,66,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(245,200,66,0.18)] text-[rgb(120,88,23)] dark:text-[rgb(245,220,142)]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold tracking-[-0.02em]">Your first environment includes the shared platform layer.</p>
                      <p className="text-sm leading-6 text-foreground/70">
                        Comments, approvals, notifications, file access, and tenant-aware permissions are configured as
                        part of the initial workspace shell.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 rounded-2xl border border-black/8 bg-white/60 p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
                    <Checkbox id="terms" className="mt-1 rounded-[6px] border-black/20 data-[state=checked]:border-primary dark:border-white/20" />
                    <span className="leading-6 text-foreground/74">
                      I confirm that I’m authorized to create this organization workspace and accept the platform terms.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-black/8 bg-white/60 p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
                    <Checkbox id="updates" className="mt-1 rounded-[6px] border-black/20 data-[state=checked]:border-primary dark:border-white/20" />
                    <span className="leading-6 text-foreground/74">
                      Send implementation guidance and launch notes for the first 30 days.
                    </span>
                  </label>
                </div>

                <div className="space-y-3 pt-2">
                  <Button asChild size="lg" className="h-12 w-full rounded-2xl text-sm font-semibold">
                    <Link href="/org/acme-corp">
                      Create organization
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 w-full rounded-2xl border-black/10 bg-transparent text-sm dark:border-white/10">
                    <Link href="/">Back to sign in</Link>
                  </Button>
                </div>
              </form>

              <div className="mt-8 flex flex-wrap items-center gap-3 rounded-[1.75rem] border border-black/8 bg-[rgba(255,255,255,0.56)] px-4 py-3 text-sm text-foreground/72 dark:border-white/10 dark:bg-white/[0.03]">
                <Globe2 className="h-4 w-4 text-muted-foreground" />
                Multi-entity organizations can add additional workspaces after the initial tenant is created.
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
