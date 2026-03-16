"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Link2,
  ShieldAlert,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

type Metric = {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "warning";
};

const SUMMARY_METRICS: Metric[] = [
  { label: "Total Headcount", value: "14,250", delta: "+1.2% YTD" },
  { label: "Active Sub-Orgs", value: "8" },
  { label: "Global Offices", value: "32" },
];

const PILLARS = [
  { name: "Market Expansion", subtitle: "APAC Region Focus", progress: 65, status: "On Track", risk: "low" },
  { name: "Digital Transformation", subtitle: "Legacy Migration", progress: 28, status: "At Risk", risk: "high" },
  { name: "Operational Excellence", subtitle: "Supply Chain Opt.", progress: 82, status: "On Track", risk: "low" },
];

const INITIATIVES = [
  { name: "ERP Modernization", owner: "Tech Ops", progress: 51, status: "In Flight" },
  { name: "New Market Entry", owner: "Growth", progress: 70, status: "On Track" },
  { name: "Procurement Consolidation", owner: "Finance", progress: 43, status: "Review" },
];

const RISKS = [
  { label: "Cybersecurity Exposure", level: "High" },
  { label: "Supplier Concentration", level: "Medium" },
  { label: "Regulatory Shift", level: "Medium" },
];

const APPROVALS = [
  { item: "Q2 Budget Reallocation", due: "Today", severity: "high" },
  { item: "Regional Hiring Plan", due: "Tomorrow", severity: "medium" },
  { item: "Security Policy Addendum", due: "2 days", severity: "low" },
];

const BLOCKERS = [
  { domain: "Finance", issue: "Vendor contract pending legal review" },
  { domain: "IT", issue: "Identity migration dependency for HRIS rollout" },
  { domain: "Operations", issue: "Procurement sign-off delayed by 1 sprint" },
];

const ALERTS = [
  { title: "Major Outage: EU-West Database Engine", meta: "Ongoing • 45m ago", type: "danger" },
  { title: "SLA Recovered: APAC Payment Gateway", meta: "Resolved • 2h ago", type: "success" },
  { title: "Board Meeting Prep Due", meta: "Action Required • Tomorrow", type: "info" },
];

function StatusBadge({ tone, children }: { tone: "default" | "warning"; children: string }) {
  if (tone === "warning") {
    return <Badge variant="secondary" className="border border-amber-200 bg-amber-100 text-amber-900 hover:bg-amber-100">{children}</Badge>;
  }
  return <Badge variant="secondary" className="border border-emerald-200 bg-emerald-100 text-emerald-900 hover:bg-emerald-100">{children}</Badge>;
}

export function OrganizationSummaryCard() {
  return (
    <Card className="col-span-12 overflow-hidden border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)]">
      <CardContent className="space-y-4 p-5 md:p-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUMMARY_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1 rounded-2xl border border-border/60 bg-background/65 p-4">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
              {metric.delta ? <p className="text-xs text-emerald-600">{metric.delta}</p> : null}
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Q1 OPEX Target</span>
            <span className="font-mono text-muted-foreground">$142M / $150M</span>
          </div>
          <Progress value={94} />
        </div>
      </CardContent>
    </Card>
  );
}

export function StrategyExecutionCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-8">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Fiscal Year 2026 Strategy Execution</CardTitle>
          <Badge>Q1 In Progress</Badge>
        </div>
        <CardDescription>Overall completion against FY26 strategic goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="text-center">
          <p className="text-5xl font-light tracking-tight">42%</p>
        </div>
        <Progress value={42} className="h-3" />
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-muted-foreground">
          <span>Q1 Start</span>
          <span>Q2 Start</span>
          <span className="text-foreground">Mid-Year</span>
          <span>Q4 Start</span>
          <span>FY End</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function CorePillarsCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <CardTitle>Core Pillars</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {PILLARS.map((pillar) => (
          <div key={pillar.name} className="rounded-2xl border border-border/70 bg-background/70 p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{pillar.name}</p>
                <p className="text-xs text-muted-foreground">{pillar.subtitle}</p>
              </div>
              <StatusBadge tone={pillar.risk === "high" ? "warning" : "default"}>{pillar.status}</StatusBadge>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={pillar.progress} className="h-2" />
              <span className="min-w-10 text-right font-mono text-xs">{pillar.progress}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function InitiativePortfolioCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-8">
      <CardHeader>
        <CardTitle>Top Strategic Initiatives (Q1)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {INITIATIVES.map((initiative) => (
          <div key={initiative.name} className="space-y-2 rounded-2xl border border-border/70 bg-background/70 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium">{initiative.name}</p>
              <Badge variant="outline">{initiative.status}</Badge>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{initiative.owner}</span>
              <span className="font-mono">{initiative.progress}%</span>
            </div>
            <Progress value={initiative.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function BudgetAlignmentCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <CardTitle>Budget Alignment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Run Rate vs Plan</span>
            <span className="font-mono">91%</span>
          </div>
          <Progress value={91} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Initiative Spend</span>
            <span className="font-mono">74%</span>
          </div>
          <Progress value={74} />
        </div>
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
          Forecast confidence remains strong. Risk-adjusted variance stays within governance tolerance.
        </div>
      </CardContent>
    </Card>
  );
}

export function RiskHeatmapCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <CardTitle>Enterprise Risk Heatmap</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {RISKS.map((risk) => (
          <div key={risk.label} className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 p-3">
            <span className="text-sm">{risk.label}</span>
            <Badge variant={risk.level === "High" ? "destructive" : "secondary"}>{risk.level}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function GovernanceApprovalsCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <CardTitle>Pending Governance Approvals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {APPROVALS.map((approval) => (
          <div key={approval.item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-3">
            <Clock3 className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{approval.item}</p>
              <p className="text-xs text-muted-foreground">Due {approval.due}</p>
            </div>
            {approval.severity === "high" ? <AlertTriangle className="h-4 w-4 text-red-500" /> : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function CrossDomainBlockersCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <CardTitle>Cross-Domain Blockers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {BLOCKERS.map((blocker) => (
          <div key={blocker.issue} className="rounded-2xl border border-border/70 bg-background/70 p-3">
            <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
              <Link2 className="h-3.5 w-3.5" />
              <span>{blocker.domain}</span>
            </div>
            <p className="text-sm">{blocker.issue}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ExecutiveAlertsCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] lg:col-span-4">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>Executive Alerts & Updates</CardTitle>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {ALERTS.map((alert) => (
          <div key={alert.title} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-3">
            {alert.type === "danger" ? <ShieldAlert className="mt-0.5 h-4 w-4 text-red-500" /> : null}
            {alert.type === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> : null}
            {alert.type === "info" ? <Clock3 className="mt-0.5 h-4 w-4 text-blue-600" /> : null}
            <div className="min-w-0">
              <p className="text-sm font-medium">{alert.title}</p>
              <p className="text-xs text-muted-foreground">{alert.meta}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
