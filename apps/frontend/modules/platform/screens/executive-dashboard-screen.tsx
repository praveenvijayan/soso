"use client";

import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  ChevronRight,
  Download,
  Flag,
  FolderKanban,
  GanttChartSquare,
  Landmark,
  Scale,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const heroMetrics = [
  { label: "Strategy health", value: "82", unit: "/100", delta: "+4", deltaLabel: "vs last cycle" },
  { label: "On-track objectives", value: "19", unit: "/27", delta: "70%", deltaLabel: "attainment" },
  { label: "Active initiatives", value: "48", unit: "", delta: "8", deltaLabel: "domains" },
  { label: "At-risk items", value: "5", unit: "", delta: "−2", deltaLabel: "vs last week" },
  { label: "Budget utilized", value: "74", unit: "%", delta: "+6.8%", deltaLabel: "variance" },
];

const executiveActionMetrics = [
  { label: "Overall strategy health", value: "82", detail: "Composite score / 100", tone: "positive" as const, actionLabel: "Review", actionPath: "corporate-strategy", icon: TrendingUp, nextStep: "Protect strong pillars and recover two lagging domains." },
  { label: "On-track objectives", value: "19", detail: "of 27 active", tone: "positive" as const, actionLabel: "Open", actionPath: "corporate-strategy", icon: Flag, nextStep: "Reallocate 1–2 teams from stable goals to recovery efforts." },
  { label: "At-risk objectives", value: "5", detail: "need exec attention", tone: "danger" as const, actionLabel: "Escalate", actionPath: "corporate-strategy", icon: AlertTriangle, nextStep: "Approve de-scoping or intervention plans this week." },
  { label: "Active initiatives", value: "48", detail: "across 8 domains", tone: "neutral" as const, actionLabel: "Open", actionPath: "business-strategic-plan", icon: GanttChartSquare, nextStep: "Close 3 blocked initiatives to restore milestone confidence." },
  { label: "High risks", value: "7", detail: "enterprise-level", tone: "danger" as const, actionLabel: "Review", actionPath: "risk-management-strategy", icon: ShieldAlert, nextStep: "Review mitigation owners and enforce weekly risk burn-down." },
  { label: "Pending decisions", value: "6", detail: "governance queue", tone: "warning" as const, actionLabel: "Open", actionPath: "governance-framework", icon: Landmark, nextStep: "Resolve funding and policy decisions before next steering cycle." },
  { label: "Budget utilization", value: "74%", detail: "FY26 current cycle", tone: "warning" as const, actionLabel: "Financials", actionPath: "financial-strategy", icon: Scale, nextStep: "Cap Digital Core variance and shift spend to priority outcomes." },
];

const pillarCards = [
  { title: "Growth Expansion", progress: 81, status: "On track", tone: "positive" as const, owner: "Corporate Strategy" },
  { title: "Digital Core", progress: 63, status: "Needs support", tone: "warning" as const, owner: "Enterprise Operating Model" },
  { title: "Financial Resilience", progress: 76, status: "On track", tone: "positive" as const, owner: "Financial Strategy" },
  { title: "Risk Posture", progress: 58, status: "At risk", tone: "danger" as const, owner: "Risk Management Strategy" },
];

const objectiveDistribution = [
  { label: "On track", value: 19, pct: 70, color: "var(--orion-success)" },
  { label: "Watchlist", value: 3, pct: 11, color: "var(--orion-warning)" },
  { label: "At risk", value: 5, pct: 19, color: "var(--orion-danger)" },
];

const trendData = [
  { month: "Sep", value: 62 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 68 },
  { month: "Dec", value: 69 },
  { month: "Jan", value: 72 },
  { month: "Feb", value: 74 },
  { month: "Mar", value: 78 },
  { month: "Apr", value: 82 },
];

const alignmentMatrix = [
  { unit: "Finance", growth: "High", digital: "Medium", finance: "Low", risk: "Medium" },
  { unit: "Operations", growth: "High", digital: "High", finance: "Medium", risk: "Low" },
  { unit: "Technology", growth: "Medium", digital: "High", finance: "High", risk: "Medium" },
  { unit: "Risk", growth: "Low", digital: "Medium", finance: "High", risk: "High" },
];

const topInitiatives = [
  { name: "ERP Modernization", owner: "Technology", status: "Watchlist" as const, milestone: "2 weeks late" },
  { name: "Margin Recovery Program", owner: "Finance", status: "On track" as const, milestone: "On schedule" },
  { name: "Operating Model Redesign", owner: "Operations", status: "At risk" as const, milestone: "4 weeks late" },
  { name: "Regional Growth Launch", owner: "Corporate Strategy", status: "On track" as const, milestone: "On schedule" },
];

const blockedInitiatives = [
  "ERP Modernization — vendor contract finalization",
  "Operating Model Redesign — HR operating model approval",
  "Regional Growth Launch — legal entity setup in EMEA",
];

const budgetByPillar = [
  { label: "Growth", amount: "$18.4M", pct: 84 },
  { label: "Digital Core", amount: "$14.2M", pct: 66 },
  { label: "Financial Resilience", amount: "$9.1M", pct: 44 },
  { label: "Risk & Compliance", amount: "$7.8M", pct: 39 },
];

const topRisks = [
  { name: "Supply chain concentration", level: "High" as const, mitigation: "Dual-source procurement in progress" },
  { name: "ERP cutover delay", level: "High" as const, mitigation: "Stage-gated milestone reviews weekly" },
  { name: "Regulatory deadline slippage", level: "Medium" as const, mitigation: "Compliance workstream escalated" },
];

const governanceItems = [
  { item: "FY26 reprioritization", owner: "Executive Committee", due: "Tomorrow", urgent: true },
  { item: "Risk appetite refresh", owner: "Board Risk Committee", due: "3 days", urgent: false },
  { item: "Digital core funding release", owner: "Investment Council", due: "5 days", urgent: false },
];

const alerts = [
  { title: "Two objectives moved to at-risk this week", type: "Escalation", owner: "Corporate Strategy", tone: "danger" as const },
  { title: "Budget variance exceeded threshold in Digital Core", type: "Financial", owner: "Financial Strategy", tone: "warning" as const },
  { title: "Compliance deadline approaching in 9 days", type: "Compliance", owner: "Governance Framework", tone: "warning" as const },
  { title: "Blocked initiative count increased in EMEA", type: "Execution", owner: "Business Strategic Plan", tone: "neutral" as const },
];

const domainLinks = [
  { label: "Corporate Strategy", icon: Flag, desc: "Objectives, pillars, alignment", path: "corporate-strategy" },
  { label: "Business Strategic Plan", icon: GanttChartSquare, desc: "Initiatives, milestones, blockers", path: "business-strategic-plan" },
  { label: "Financial Strategy", icon: Scale, desc: "Budgets, funding, variance", path: "financial-strategy" },
  { label: "Platform & Collaboration", icon: Building2, desc: "Approvals, notifications, audit", path: "platform" },
];

/* ─── Style helpers ──────────────────────────────────────────────────── */

type Tone = "positive" | "warning" | "danger" | "neutral";

const toneColor: Record<Tone, string> = {
  positive: "var(--orion-success)",
  warning: "var(--orion-warning)",
  danger: "var(--orion-danger)",
  neutral: "var(--orion-text-tertiary)",
};

const toneBg: Record<Tone, string> = {
  positive: "var(--orion-success-bg)",
  warning: "var(--orion-warning-bg)",
  danger: "var(--orion-danger-bg)",
  neutral: "var(--orion-surface-2)",
};

function StatusDot({ tone }: { tone: Tone }) {
  return (
    <span
      className="inline-block h-[6px] w-[6px] rounded-full shrink-0"
      style={{ background: toneColor[tone] }}
    />
  );
}

function StatusPill({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.06em] leading-none"
      style={{ background: toneBg[tone], color: toneColor[tone] }}
    >
      <StatusDot tone={tone} />
      {label}
    </span>
  );
}

function SectionHeading({
  title,
  action,
  href,
}: {
  title: string;
  action?: string;
  href?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2
        className="text-[1.125rem] font-semibold tracking-[-0.02em]"
        style={{ color: "var(--orion-text-primary)" }}
      >
        {title}
      </h2>
      {action && href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: "var(--orion-text-tertiary)" }}
        >
          {action}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

function UtilityLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10px] font-medium uppercase tracking-[0.14em]"
      style={{ color: "var(--orion-text-tertiary)" }}
    >
      {children}
    </span>
  );
}

/* ─── Trend micro-chart ──────────────────────────────────────────────── */

function TrendSpark() {
  const max = Math.max(...trendData.map((d) => d.value));
  const min = Math.min(...trendData.map((d) => d.value));
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-[3px] h-[72px]">
      {trendData.map((d, i) => {
        const isLast = i === trendData.length - 1;
        const heightPct = ((d.value - min) / range) * 70 + 30;
        return (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end justify-center" style={{ height: 56 }}>
              <div
                className="w-full rounded-sm transition-all"
                style={{
                  height: `${heightPct}%`,
                  background: isLast ? "var(--orion-yellow)" : "var(--orion-border-base)",
                  minHeight: 4,
                }}
              />
            </div>
            <span
              className="text-[9px] leading-none tabular-nums"
              style={{ color: "var(--orion-text-tertiary)" }}
            >
              {d.month.charAt(0)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Alignment matrix cell ──────────────────────────────────────────── */

function AlignmentCell({ level }: { level: string }) {
  const bg =
    level === "High"
      ? "var(--orion-success-bg)"
      : level === "Medium"
        ? "var(--orion-warning-bg)"
        : "var(--orion-surface-2)";
  const fg =
    level === "High"
      ? "var(--orion-success)"
      : level === "Medium"
        ? "var(--orion-warning)"
        : "var(--orion-text-tertiary)";

  return (
    <div
      className="rounded-md py-1.5 text-center text-[10px] font-semibold"
      style={{ background: bg, color: fg }}
    >
      {level}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */

export function ExecutiveDashboardScreen({ orgSlug }: { orgSlug: string }) {
  return (
    <div className="-mx-6 -mt-10 md:-mx-8">
      {/* ────────────────────────────────────────────────────────────────
          HERO: Full-bleed warm header with live metrics
      ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--orion-surface-1) 0%, color-mix(in oklch, var(--orion-yellow-light) 30%, var(--orion-surface-1) 70%) 100%)",
        }}
      >
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute -top-1/3 right-0 h-[600px] w-[600px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, var(--orion-yellow) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between pt-10 pb-8">
            <div>
              <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] mb-3">
                Executive dashboard
              </Badge>
              <h1
                className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight leading-[1.15]"
                style={{ color: "var(--orion-text-primary)" }}
              >
                Strategy command view
              </h1>
              <p
                className="mt-2 text-sm leading-relaxed max-w-xl"
                style={{ color: "var(--orion-text-secondary)" }}
              >
                FY26 Q2 · Enterprise-wide signals across strategy, delivery, risk, governance, and financial performance.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {/* Live pulse */}
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: "var(--orion-success)" }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "var(--orion-success)" }}
                  />
                </span>
                <span style={{ color: "var(--orion-text-secondary)" }}>Live · 12m ago</span>
              </div>

            </div>
          </div>

          {/* ── Hero metrics row ── */}
          <div className="grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-5">
            {heroMetrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col justify-between p-5"
                style={{
                  background: "var(--orion-surface-0)",
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.12em] leading-none"
                  style={{ color: "var(--orion-text-tertiary)" }}
                >
                  {m.label}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-[2rem] font-bold tracking-tight leading-none tabular-nums"
                    style={{ color: "var(--orion-text-primary)" }}
                  >
                    {m.value}
                  </span>
                  {m.unit && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--orion-text-tertiary)" }}
                    >
                      {m.unit}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: m.delta.startsWith("−") ? "var(--orion-success)" : "var(--orion-text-secondary)" }}
                  >
                    {m.delta}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--orion-text-tertiary)" }}
                  >
                    {m.deltaLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          CONTROLS: Full-width sticky sub-header
      ──────────────────────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-30 border-b backdrop-blur"
        style={{
          background: "color-mix(in oklch, var(--orion-surface-0) 92%, transparent)",
          borderColor: "var(--orion-border-subtle)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-3 py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <UtilityLabel>Controls</UtilityLabel>
                <span style={{ color: "var(--orion-text-secondary)" }}>Live executive slice for FY26 Q2</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[11px]">
                <div className="flex items-center gap-2">
                  <UtilityLabel>Updated</UtilityLabel>
                  <span style={{ color: "var(--orion-text-secondary)" }}>12 minutes ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-7 rounded-full px-3 text-[11px]">
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 rounded-full px-3 text-[11px]">
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none">
              {[
                { placeholder: "FY26 Q2", items: [{ v: "fy26-q2", l: "FY26 Q2" }, { v: "fy26-q1", l: "FY26 Q1" }] },
                { placeholder: "All units", items: [{ v: "all", l: "All units" }, { v: "finance", l: "Finance" }, { v: "operations", l: "Operations" }, { v: "technology", l: "Technology" }] },
                { placeholder: "All pillars", items: [{ v: "all", l: "All pillars" }, { v: "growth", l: "Growth" }, { v: "digital", l: "Digital Core" }, { v: "finance", l: "Financial" }, { v: "risk", l: "Risk" }] },
                { placeholder: "Status", items: [{ v: "all", l: "All statuses" }, { v: "on-track", l: "On track" }, { v: "watchlist", l: "Watchlist" }, { v: "at-risk", l: "At risk" }] },
                { placeholder: "Risk level", items: [{ v: "all", l: "All levels" }, { v: "high", l: "High" }, { v: "medium", l: "Medium" }, { v: "low", l: "Low" }] },
                { placeholder: "Timeframe", items: [{ v: "current", l: "Current cycle" }, { v: "30d", l: "Next 30 days" }, { v: "quarter", l: "This quarter" }] },
              ].map(({ placeholder, items }) => (
                <Select key={placeholder}>
                  <SelectTrigger
                    className="h-8 min-w-[118px] w-auto gap-1.5 rounded-full border-0 bg-transparent px-0 text-[11px] font-medium shadow-none shrink-0"
                    style={{ color: "var(--orion-text-secondary)" }}
                  >
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map(({ v, l }) => (
                      <SelectItem key={v} value={v} className="text-xs">{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────
          BODY: Main dashboard content
      ──────────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-10 pb-20 space-y-14">

        {/* ── Executive action priorities ───────────────────────────── */}
        <section>
          <SectionHeading title="Executive action priorities" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {executiveActionMetrics.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.label}
                  href={`/org/${orgSlug}/${m.actionPath}`}
                  className="group relative flex flex-col gap-4 rounded-2xl p-5 transition-all"
                  style={{
                    background: "var(--orion-surface-0)",
                    boxShadow: "var(--shadow-xs)",
                  }}
                >
                  {/* Top: icon + label + status */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5" style={{ color: "var(--orion-text-tertiary)" }} />
                      <span
                        className="text-[11px] font-medium uppercase tracking-[0.08em]"
                        style={{ color: "var(--orion-text-tertiary)" }}
                      >
                        {m.label}
                      </span>
                    </div>
                    <StatusPill label={m.tone === "positive" ? "Healthy" : m.tone === "danger" ? "Urgent" : m.tone === "warning" ? "Watch" : "Live"} tone={m.tone} />
                  </div>

                  {/* Value */}
                  <div>
                    <span
                      className="text-[1.75rem] font-bold tracking-tight leading-none tabular-nums"
                      style={{ color: "var(--orion-text-primary)" }}
                    >
                      {m.value}
                    </span>
                    <span
                      className="ml-1.5 text-xs"
                      style={{ color: "var(--orion-text-tertiary)" }}
                    >
                      {m.detail}
                    </span>
                  </div>

                  {/* Next step */}
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ color: "var(--orion-text-secondary)" }}
                  >
                    {m.nextStep}
                  </p>

                  {/* Action link */}
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-semibold group-hover:gap-1.5 transition-all"
                    style={{ color: "var(--orion-text-primary)" }}
                  >
                    {m.actionLabel}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Strategy Health + KPI ───────────────────────────────── */}
        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Strategy Health */}
          <section>
            <SectionHeading
              title="Strategy health"
              action="Full view"
              href={`/org/${orgSlug}/corporate-strategy`}
            />

            {/* Pillars */}
            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              {pillarCards.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-5"
                  style={{
                    background: "var(--orion-surface-0)",
                    boxShadow: "var(--shadow-xs)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--orion-text-primary)" }}>{p.title}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "var(--orion-text-tertiary)" }}>{p.owner}</p>
                    </div>
                    <StatusPill label={p.status} tone={p.tone} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span style={{ color: "var(--orion-text-tertiary)" }}>Progress</span>
                    <span className="font-semibold tabular-nums" style={{ color: "var(--orion-text-primary)" }}>{p.progress}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--orion-surface-2)" }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${p.progress}%`, background: toneColor[p.tone] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Distribution + Trend side by side */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Objective distribution */}
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "var(--orion-text-tertiary)" }}>
                  Objective distribution
                </p>
                {/* Stacked bar */}
                <div className="flex h-3 rounded-full overflow-hidden mb-4" style={{ background: "var(--orion-surface-2)" }}>
                  {objectiveDistribution.map((d) => (
                    <div
                      key={d.label}
                      style={{ width: `${d.pct}%`, background: d.color }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {objectiveDistribution.map((d) => (
                    <div key={d.label} className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full shrink-0" style={{ background: d.color }} />
                        <span style={{ color: "var(--orion-text-secondary)" }}>{d.label}</span>
                      </div>
                      <span className="font-semibold tabular-nums" style={{ color: "var(--orion-text-primary)" }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8-month trend */}
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>
                    8-month trend
                  </p>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[10px] font-semibold"
                    style={{ background: "var(--orion-success-bg)", color: "var(--orion-success)" }}
                  >
                    <TrendingUp className="h-3 w-3" />
                    +20 pts
                  </span>
                </div>
                <TrendSpark />
              </div>
            </div>
          </section>

          {/* KPI & Performance */}
          <section>
            <SectionHeading
              title="KPI & performance"
              action="All KPIs"
              href={`/org/${orgSlug}/corporate-strategy`}
            />

            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              {[
                { label: "Revenue growth", value: "9.4%", target: "10%", status: "Near target", tone: "warning" as Tone },
                { label: "Delivery predictability", value: "78%", target: "85%", status: "Below target", tone: "danger" as Tone },
                { label: "Operating margin", value: "14.8%", target: "15%", status: "Near target", tone: "warning" as Tone },
                { label: "Compliance completion", value: "96%", target: "100%", status: "On track", tone: "positive" as Tone },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px]" style={{ color: "var(--orion-text-tertiary)" }}>{kpi.label}</span>
                    <StatusPill label={kpi.status} tone={kpi.tone} />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold tracking-tight tabular-nums" style={{ color: "var(--orion-text-primary)" }}>{kpi.value}</span>
                    <span className="text-[11px]" style={{ color: "var(--orion-text-tertiary)" }}>target {kpi.target}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance exceptions */}
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Exceptions
              </p>
              <div className="space-y-2">
                {[
                  "Delivery predictability missed target 3 consecutive months",
                  "Digital Core cost per milestone exceeded plan by 11%",
                  "Compliance completion in APAC behind global average by 4 pts",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 py-2 px-3 rounded-lg text-[11px] leading-relaxed"
                    style={{ background: "var(--orion-warning-bg)", color: "var(--orion-warning)" }}
                  >
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── Alignment + Initiative Delivery ───────────────────────── */}
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          {/* Alignment */}
          <section>
            <SectionHeading
              title="Strategic alignment"
              action="Full matrix"
              href={`/org/${orgSlug}/corporate-strategy`}
            />

            {/* Matrix */}
            <div
              className="rounded-xl p-4 mb-5 overflow-x-auto"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <div className="min-w-[360px]">
                <div className="grid grid-cols-[80px_repeat(4,1fr)] gap-1.5 text-[10px]">
                  <div />
                  {["Growth", "Digital", "Finance", "Risk"].map((h) => (
                    <div key={h} className="text-center font-semibold uppercase tracking-[0.08em] py-1" style={{ color: "var(--orion-text-tertiary)" }}>
                      {h}
                    </div>
                  ))}
                  {alignmentMatrix.map((row) => (
                    <React.Fragment key={row.unit}>
                      <div className="flex items-center text-xs font-medium py-1" style={{ color: "var(--orion-text-primary)" }}>
                        {row.unit}
                      </div>
                      <AlignmentCell level={row.growth} />
                      <AlignmentCell level={row.digital} />
                      <AlignmentCell level={row.finance} />
                      <AlignmentCell level={row.risk} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Unaligned + Conflicts */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                  Unaligned objectives
                </p>
                <div className="space-y-1">
                  {["Cost to serve optimization", "Regulatory readiness uplift", "Supplier resiliency framework"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-2 text-xs"
                      style={{ color: "var(--orion-text-secondary)", borderBottom: "1px solid var(--orion-border-subtle)" }}
                    >
                      {item}
                      <ArrowUpRight className="h-3 w-3 shrink-0" style={{ color: "var(--orion-text-tertiary)" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                  Dependency conflicts
                </p>
                <div className="space-y-2">
                  {["Finance sign-off delaying operating model changes", "Risk review blocks APAC launch", "Data platform dependency affects KPI refresh"].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-[11px] leading-relaxed py-2 px-3 rounded-lg"
                      style={{ background: "var(--orion-warning-bg)", color: "var(--orion-warning)" }}
                    >
                      <Flag className="h-3 w-3 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Initiative & Delivery */}
          <section>
            <SectionHeading
              title="Initiative delivery"
              action="All initiatives"
              href={`/org/${orgSlug}/business-strategic-plan`}
            />

            {/* Status summary */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {([
                { label: "On track", value: "33", tone: "positive" as Tone },
                { label: "Watchlist", value: "11", tone: "warning" as Tone },
                { label: "At risk", value: "4", tone: "danger" as Tone },
              ]).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-3 text-center"
                  style={{ background: toneBg[s.tone] }}
                >
                  <div className="text-xl font-bold tabular-nums" style={{ color: toneColor[s.tone] }}>{s.value}</div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] mt-0.5" style={{ color: toneColor[s.tone], opacity: 0.7 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div
              className="mb-5 overflow-hidden rounded-lg"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: "var(--orion-surface-2)" }}>
                    <th className="text-left py-2.5 px-4 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Initiative</th>
                    <th className="text-left py-2.5 px-4 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Status</th>
                    <th className="text-left py-2.5 px-4 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {topInitiatives.map((init) => (
                    <tr
                      key={init.name}
                      style={{ borderTop: "1px solid var(--orion-border-subtle)", background: "var(--orion-surface-0)" }}
                    >
                      <td className="py-2.5 px-4">
                        <p className="font-medium" style={{ color: "var(--orion-text-primary)" }}>{init.name}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: "var(--orion-text-tertiary)" }}>{init.owner}</p>
                      </td>
                      <td className="py-2.5 px-4">
                        <StatusPill
                          label={init.status}
                          tone={init.status === "On track" ? "positive" : init.status === "At risk" ? "danger" : "warning"}
                        />
                      </td>
                      <td className="py-2.5 px-4" style={{ color: "var(--orion-text-secondary)" }}>{init.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Blocked */}
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Blocked
              </p>
              <div className="space-y-2">
                {blockedInitiatives.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[11px] leading-relaxed py-1.5"
                    style={{ color: "var(--orion-text-secondary)", borderBottom: "1px solid var(--orion-border-subtle)" }}
                  >
                    <FolderKanban className="h-3 w-3 mt-0.5 shrink-0" style={{ color: "var(--orion-warning)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── Financial + Risk ───────────────────────────────────────── */}
        <div className="grid gap-10 xl:grid-cols-2">
          {/* Financial */}
          <section>
            <SectionHeading
              title="Financial overview"
              action="Open financials"
              href={`/org/${orgSlug}/financial-strategy`}
            />

            {/* Funded / Unfunded / Variance */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: "var(--orion-success-bg)" }}
              >
                <div className="text-2xl font-bold tabular-nums" style={{ color: "var(--orion-success)" }}>21</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.1em] mt-1" style={{ color: "var(--orion-success)", opacity: 0.7 }}>Funded</div>
              </div>
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: "var(--orion-warning-bg)" }}
              >
                <div className="text-2xl font-bold tabular-nums" style={{ color: "var(--orion-warning)" }}>6</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.1em] mt-1" style={{ color: "var(--orion-warning)", opacity: 0.7 }}>Unfunded</div>
              </div>
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <div className="text-2xl font-bold tabular-nums" style={{ color: "var(--orion-warning)" }}>+6.8%</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.1em] mt-1" style={{ color: "var(--orion-text-tertiary)" }}>Variance</div>
              </div>
            </div>

            {/* Budget bars */}
            <div
              className="rounded-xl p-4 mb-5"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "var(--orion-text-tertiary)" }}>
                Budget by pillar
              </p>
              <div className="space-y-3">
                {budgetByPillar.map((b) => (
                  <div key={b.label}>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span style={{ color: "var(--orion-text-secondary)" }}>{b.label}</span>
                      <span className="font-semibold tabular-nums" style={{ color: "var(--orion-text-primary)" }}>{b.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--orion-surface-2)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${b.pct}%`, background: "var(--orion-yellow)" }}
                        />
                      </div>
                      <span className="text-[10px] tabular-nums w-7 text-right" style={{ color: "var(--orion-text-tertiary)" }}>{b.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Over-budget */}
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Over-budget
              </p>
              {["ERP Modernization (+11%)", "Data platform foundation (+8%)", "Operating model redesign (+6%)"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-2 text-xs"
                  style={{ borderBottom: "1px solid var(--orion-border-subtle)", color: "var(--orion-danger)" }}
                >
                  {item}
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </div>
              ))}
            </div>
          </section>

          {/* Risk & Compliance */}
          <section>
            <SectionHeading
              title="Risk & compliance"
              action="Open risk"
              href={`/org/${orgSlug}/risk-management-strategy`}
            />

            {/* Summary row */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Mitigation</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-text-primary)" }}>67%</div>
                <div className="h-1 rounded-full mt-2 overflow-hidden" style={{ background: "var(--orion-surface-2)" }}>
                  <div className="h-full rounded-full" style={{ width: "67%", background: "var(--orion-success)" }} />
                </div>
                <p className="text-[10px] mt-1.5" style={{ color: "var(--orion-text-tertiary)" }}>Plans on track</p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-danger-bg)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-danger)" }}>Compliance due</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-danger)" }}>9</div>
                <p className="text-[10px] mt-2" style={{ color: "var(--orion-danger)", opacity: 0.7 }}>Items due in 30 days</p>
              </div>
            </div>

            {/* Heatmap */}
            <div
              className="rounded-xl p-4 mb-5"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Risk heatmap</p>
                <div className="flex items-center gap-3">
                  {[
                    { color: "var(--orion-success-bg)", label: "Low" },
                    { color: "var(--orion-warning-bg)", label: "Med" },
                    { color: "var(--orion-danger-bg)", label: "High" },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-sm" style={{ background: l.color }} />
                      <span className="text-[9px]" style={{ color: "var(--orion-text-tertiary)" }}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  "success-bg", "warning-bg", "warning-bg", "danger-bg",
                  "surface-2", "success-bg", "warning-bg", "danger-bg",
                  "surface-2", "surface-2", "warning-bg", "danger-bg",
                  "surface-2", "surface-2", "warning-bg", "danger-bg",
                ].map((token, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-md"
                    style={{ background: `var(--orion-${token})` }}
                  />
                ))}
              </div>
            </div>

            {/* Top risks */}
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Top risks
              </p>
              <div className="space-y-3">
                {topRisks.map((risk) => (
                  <div
                    key={risk.name}
                    className="pb-3"
                    style={{ borderBottom: "1px solid var(--orion-border-subtle)" }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-medium" style={{ color: "var(--orion-text-primary)" }}>{risk.name}</p>
                      <StatusPill label={risk.level} tone={risk.level === "High" ? "danger" : "warning"} />
                    </div>
                    <p className="text-[10px] mt-1" style={{ color: "var(--orion-text-tertiary)" }}>{risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── Governance + Alerts ──────────────────────────────────── */}
        <div className="grid gap-10 xl:grid-cols-2">
          {/* Governance */}
          <section>
            <SectionHeading
              title="Governance & decisions"
              action="Open governance"
              href={`/org/${orgSlug}/governance-framework`}
            />

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Decisions</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-text-primary)" }}>42</div>
                <p className="text-[10px] mt-1" style={{ color: "var(--orion-text-tertiary)" }}>This cycle</p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-danger-bg)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-danger)" }}>Overdue reviews</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-danger)" }}>4</div>
                <p className="text-[10px] mt-1" style={{ color: "var(--orion-danger)", opacity: 0.7 }}>Past due</p>
              </div>
            </div>

            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Pending approvals
              </p>
              <div className="space-y-0">
                {governanceItems.map((g) => (
                  <div
                    key={g.item}
                    className="flex items-center justify-between gap-3 py-2.5"
                    style={{ borderBottom: "1px solid var(--orion-border-subtle)" }}
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: "var(--orion-text-primary)" }}>{g.item}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--orion-text-tertiary)" }}>{g.owner}</p>
                    </div>
                    <StatusPill label={g.due} tone={g.urgent ? "danger" : "warning"} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section>
            <SectionHeading
              title="Alerts & escalations"
              action="Open alerts"
              href={`/org/${orgSlug}/platform`}
            />

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                className="rounded-xl p-4"
                style={{
                  background: "color-mix(in oklch, var(--orion-yellow-light) 40%, var(--orion-surface-0) 60%)",
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-secondary)" }}>Action inbox</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-text-primary)" }}>11</div>
                <p className="text-[10px] mt-1" style={{ color: "var(--orion-text-tertiary)" }}>Due this week</p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--orion-text-tertiary)" }}>Deadlines</p>
                <div className="text-2xl font-bold tracking-tight mt-1 tabular-nums" style={{ color: "var(--orion-text-primary)" }}>8</div>
                <p className="text-[10px] mt-1" style={{ color: "var(--orion-text-tertiary)" }}>Next 30 days</p>
              </div>
            </div>

            <div
              className="rounded-xl p-4"
              style={{ background: "var(--orion-surface-0)", boxShadow: "var(--shadow-xs)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--orion-text-tertiary)" }}>
                Cross-module notifications
              </p>
              <div className="space-y-0">
                {alerts.map((alert) => (
                  <div
                    key={alert.title}
                    className="flex items-start gap-3 py-2.5"
                    style={{
                      borderBottom: "1px solid var(--orion-border-subtle)",
                      borderLeft: `2px solid ${toneColor[alert.tone]}`,
                      paddingLeft: 12,
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-medium" style={{ color: "var(--orion-text-primary)" }}>{alert.title}</p>
                        <StatusPill label={alert.type} tone={alert.tone} />
                      </div>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--orion-text-tertiary)" }}>{alert.owner}</p>
                    </div>
                    <Link
                      href={`/org/${orgSlug}/platform`}
                      className="flex items-center gap-1 text-[10px] font-medium shrink-0 mt-0.5 transition-colors"
                      style={{ color: "var(--orion-text-tertiary)" }}
                    >
                      View
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── Domain Quick Access ───────────────────────────────────── */}
        <section>
          <SectionHeading
            title="Domain access"
            action="All modules"
            href={`/org/${orgSlug}/platform`}
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {domainLinks.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.label}
                  href={`/org/${orgSlug}/${d.path}`}
                  className="group flex flex-col gap-3 rounded-xl p-5 transition-all"
                  style={{
                    background: "var(--orion-surface-0)",
                    boxShadow: "var(--shadow-xs)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--orion-surface-2)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: "var(--orion-text-secondary)" }} />
                    </div>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--orion-text-tertiary)" }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--orion-text-primary)" }}>{d.label}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "var(--orion-text-tertiary)" }}>{d.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
