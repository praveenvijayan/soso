"use client";

import {
  Building2,
  ChevronRight,
  FolderTree,
  Globe2,
  MailCheck,
  Rocket,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

type Organization = {
  id: string;
  name: string;
  slug: string;
  industry: string;
  region: string;
  sizeBand: string;
  status: "Active" | "Provisioning" | "Archived";
  createdAt: string;
};

type User = {
  id: string;
  fullName: string;
  email: string;
  status: "Active" | "Invited" | "Suspended";
  lastLoginAt: string;
};

type Membership = {
  id: string;
  organization: string;
  user: string;
  department: string | null;
  manager: string | null;
  title: string;
  status: "Active" | "Pending" | "On Leave";
  joinedAt: string;
};

type Role = {
  id: string;
  code: string;
  name: string;
  scopeType: "platform" | "organization" | "module" | "resource";
};

type MembershipRole = {
  id: string;
  membership: string;
  role: string;
  module: string | null;
  resourceType: string | null;
  resourceId: string | null;
};

type Department = {
  id: string;
  name: string;
  code: string;
  leader: string | null;
  depth: number;
};

const organizations: Organization[] = [
  {
    id: "org_001",
    name: "Acme Corp",
    slug: "acme-corp",
    industry: "Industrial Technology",
    region: "North America",
    sizeBand: "Enterprise",
    status: "Active",
    createdAt: "Jan 12, 2026",
  },
  {
    id: "org_002",
    name: "Helio Health",
    slug: "helio-health",
    industry: "Healthcare",
    region: "EMEA",
    sizeBand: "Mid-market",
    status: "Provisioning",
    createdAt: "Feb 03, 2026",
  },
  {
    id: "org_003",
    name: "Northstar Energy",
    slug: "northstar-energy",
    industry: "Energy",
    region: "APAC",
    sizeBand: "Enterprise",
    status: "Active",
    createdAt: "Nov 18, 2025",
  },
];

const users: User[] = [
  { id: "usr_001", fullName: "John Smith", email: "john@acmecorp.com", status: "Active", lastLoginAt: "2h ago" },
  { id: "usr_002", fullName: "Maya Patel", email: "maya@acmecorp.com", status: "Active", lastLoginAt: "18m ago" },
  { id: "usr_003", fullName: "Daniel Kim", email: "daniel@helio.health", status: "Invited", lastLoginAt: "Never" },
  { id: "usr_004", fullName: "Rachel Morgan", email: "rachel@northstar.energy", status: "Suspended", lastLoginAt: "8 days ago" },
];

const memberships: Membership[] = [
  {
    id: "mem_001",
    organization: "Acme Corp",
    user: "John Smith",
    department: "Strategy Office",
    manager: "Maya Patel",
    title: "Strategy Manager",
    status: "Active",
    joinedAt: "Jan 15, 2026",
  },
  {
    id: "mem_002",
    organization: "Acme Corp",
    user: "Maya Patel",
    department: "Executive Operations",
    manager: null,
    title: "Chief of Staff",
    status: "Active",
    joinedAt: "Oct 02, 2025",
  },
  {
    id: "mem_003",
    organization: "Helio Health",
    user: "Daniel Kim",
    department: null,
    manager: null,
    title: "Implementation Lead",
    status: "Pending",
    joinedAt: "Mar 01, 2026",
  },
];

const roles: Role[] = [
  { id: "rol_001", code: "super_admin", name: "Super Admin", scopeType: "platform" },
  { id: "rol_002", code: "org_admin", name: "Organization Admin", scopeType: "organization" },
  { id: "rol_003", code: "strategy_manager", name: "Strategy Manager", scopeType: "module" },
  { id: "rol_004", code: "reviewer", name: "Reviewer", scopeType: "resource" },
  { id: "rol_005", code: "executive", name: "Executive", scopeType: "organization" },
  { id: "rol_006", code: "viewer", name: "Viewer", scopeType: "resource" },
];

const membershipRoles: MembershipRole[] = [
  {
    id: "mr_001",
    membership: "John Smith",
    role: "Strategy Manager",
    module: "Strategic Planning",
    resourceType: "initiative",
    resourceId: "INIT-204",
  },
  {
    id: "mr_002",
    membership: "Maya Patel",
    role: "Organization Admin",
    module: null,
    resourceType: null,
    resourceId: null,
  },
  {
    id: "mr_003",
    membership: "Daniel Kim",
    role: "Reviewer",
    module: "Platform & Collaboration Services",
    resourceType: "department",
    resourceId: "DEPT-HLTH-01",
  },
];

const departments: Department[] = [
  { id: "dep_001", name: "Executive Operations", code: "EXEC", leader: "Maya Patel", depth: 0 },
  { id: "dep_002", name: "Strategy Office", code: "STRAT", leader: "John Smith", depth: 1 },
  { id: "dep_003", name: "PMO", code: "PMO", leader: "Sana Rahman", depth: 2 },
  { id: "dep_004", name: "Business Intelligence", code: "BI", leader: "Victor Chen", depth: 1 },
];

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    Active: "border-emerald-200 bg-emerald-100 text-emerald-900",
    Provisioning: "border-amber-200 bg-amber-100 text-amber-900",
    Archived: "border-zinc-300 bg-zinc-100 text-zinc-800",
    Invited: "border-sky-200 bg-sky-100 text-sky-900",
    Suspended: "border-rose-200 bg-rose-100 text-rose-900",
    Pending: "border-amber-200 bg-amber-100 text-amber-900",
    "On Leave": "border-indigo-200 bg-indigo-100 text-indigo-900",
  };

  return (
    <Badge variant="secondary" className={styles[status] ?? "border-border bg-secondary text-secondary-foreground"}>
      {status}
    </Badge>
  );
}

function scopeBadge(scope: Role["scopeType"]) {
  const label = scope[0].toUpperCase() + scope.slice(1);
  return (
    <Badge variant="outline" className="border-border/80 bg-background/60">
      {label}
    </Badge>
  );
}

function MetricTile({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
    </div>
  );
}

export function PlatformServicesOverview() {
  return (
    <Card className="col-span-12 overflow-hidden border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)]">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Platform & Collaboration Services</CardTitle>
            <CardDescription>
              Reusable admin surfaces for tenant, user, membership, role, assignment, and department workflows.
            </CardDescription>
          </div>
          <Badge className="rounded-full px-3 py-1">Admin foundation</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-4">
        <MetricTile icon={Building2} label="Organizations" value="128" detail="Multi-tenant registry with provisioning and lifecycle states." />
        <MetricTile icon={Users} label="Users" value="8,420" detail="Person identities shared across organizations with membership context." />
        <MetricTile icon={UserCog} label="Memberships" value="12,944" detail="Org presence, titles, manager hierarchy, and status tracking." />
        <MetricTile icon={ShieldCheck} label="Assignments" value="31,208" detail="Role-based access with module and resource scoping." />
      </CardContent>
    </Card>
  );
}

export function OrganizationOnboardingSignupBlock() {
  return (
    <Card className="col-span-12 overflow-hidden border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)]">
      <CardContent className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:p-7">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="rounded-full px-3 py-1">Organization onboarding</Badge>
            <div className="text-sm text-muted-foreground">Tenant root signup aligned to the `Organization` schema</div>
          </div>

          <div>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em]">
              Create the tenant root first, then hand off to access setup.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              This component now follows the `Organization` table directly. It captures only the record fields needed at signup, keeps system-generated fields explicit, and separates initial admin capture from the tenant object itself.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <Rocket className="h-4 w-4 text-primary" />
              <p className="mt-3 text-sm font-medium">Provision tenant</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Create organization root, slug, and default workspace scaffolding.</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <Users className="h-4 w-4 text-primary" />
              <p className="mt-3 text-sm font-medium">Assign first admin</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Capture the initial identity and membership record with org-level access.</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <MailCheck className="h-4 w-4 text-primary" />
              <p className="mt-3 text-sm font-medium">Invite collaborators</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Set up the next step clearly so the team reaches value quickly.</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium">Organization fields</p>
                <p className="text-xs text-muted-foreground">Direct mapping to the tenant root record.</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">PK: id</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["name", "slug", "industry", "region", "size_band", "status"].map((field) => (
                <Badge key={field} variant="outline" className="border-border/80 bg-background/80 font-mono text-[11px]">
                  {field}
                </Badge>
              ))}
              <Badge variant="outline" className="border-dashed border-border/80 bg-background/80 font-mono text-[11px] text-muted-foreground">
                created_at auto-generated
              </Badge>
            </div>
            <div className="mt-5 rounded-2xl border border-border/70 bg-card/90 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">Tenant preview</p>
                  <p className="mt-1 text-xs text-muted-foreground">What gets created immediately after signup.</p>
                </div>
                <Badge variant="secondary" className="border-amber-200 bg-amber-100 text-amber-900">
                  provisioning
                </Badge>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Relationships</p>
                  <p className="mt-1 text-sm">Departments, memberships, planning cycles, artifacts, links</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Created at</p>
                  <p className="mt-1 text-sm">Assigned by system on submit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border/70 bg-background/80 p-5 shadow-sm">
          <div className="mb-5">
            <p className="text-lg font-semibold tracking-tight">Create organization</p>
            <p className="mt-1 text-sm text-muted-foreground">Tenant root fields first. Access setup follows as a separate step.</p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="signup-org-name">Name</Label>
                <Input id="signup-org-name" placeholder="Acme Corp" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-org-slug">Slug</Label>
                <Input id="signup-org-slug" placeholder="acme-corp" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Industry</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="public-sector">Public Sector</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="emea">EMEA</SelectItem>
                    <SelectItem value="apac">APAC</SelectItem>
                    <SelectItem value="latam">LATAM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Size band</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size band" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="mid-market">Mid-market</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="global">Global enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Status</Label>
                <div className="flex h-10 items-center rounded-md border border-dashed border-border/80 bg-muted/40 px-3 text-sm text-muted-foreground">
                  Provisioning on signup
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signup-admin-email">Primary admin email</Label>
              <Input id="signup-admin-email" placeholder="admin@acmecorp.com" type="email" />
            </div>
          </div>
          <div className="clear-both flex flex-col gap-4 md:flex-row md:items-end md:justify-between mt-5">
            <div className="space-y-2 md:max-w-sm">
              <p className="text-sm font-medium">What happens next</p>
              <p className="text-xs leading-5 text-muted-foreground">
                Create the `Organization` record, generate `created_at`, set `status` to provisioning, then continue to the first membership assignment step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
              <Button variant="outline" className="w-full sm:w-auto">Skip for now</Button>
              <Button className="w-full sm:w-auto">Create workspace</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function OrganizationRegistryCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-7">
      <CardHeader>
        <CardTitle>Organization Registry</CardTitle>
        <CardDescription>Tenant root list view with onboarding state, slug, and regional metadata.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Input className="max-w-sm" placeholder="Search tenant, slug, region..." />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="provisioning">Provisioning</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Organization</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((organization) => (
              <TableRow key={organization.id}>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{organization.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">{organization.slug}</div>
                  </div>
                </TableCell>
                <TableCell>{organization.industry}</TableCell>
                <TableCell>{organization.region}</TableCell>
                <TableCell>{organization.sizeBand}</TableCell>
                <TableCell>{statusBadge(organization.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function OrganizationWorkspaceCard() {
  const organization = organizations[0];

  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-5">
      <CardHeader>
        <CardTitle>Organization Workspace</CardTitle>
        <CardDescription>Tenant detail header for profile, health, and downstream object counts.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xl font-semibold tracking-tight">{organization.name}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{organization.id} / {organization.slug}</div>
            </div>
            {statusBadge(organization.status)}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Industry</p>
              <p className="mt-1 text-sm">{organization.industry}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Region</p>
              <p className="mt-1 text-sm">{organization.region}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Size band</p>
              <p className="mt-1 text-sm">{organization.sizeBand}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Created</p>
              <p className="mt-1 text-sm">{organization.createdAt}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Departments", value: "18" },
            { label: "Planning cycles", value: "4" },
            { label: "Risks", value: "53" },
            { label: "Resource links", value: "142" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function UserDirectoryCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-7">
      <CardHeader>
        <CardTitle>User Directory</CardTitle>
        <CardDescription>Identity list page with status, last login, and multi-org discoverability.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last login</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs font-semibold">
                        {user.fullName.split(" ").map((name) => name[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="font-medium">{user.fullName}</div>
                      <div className="font-mono text-xs text-muted-foreground">{user.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{statusBadge(user.status)}</TableCell>
                <TableCell>{user.lastLoginAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function MembershipWorkspaceCard() {
  const membership = memberships[0];

  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-5">
      <CardHeader>
        <CardTitle>Membership Workspace</CardTitle>
        <CardDescription>User presence inside an organization with department and manager context.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-lg font-semibold">{membership.user}</div>
              <p className="text-sm text-muted-foreground">{membership.title}</p>
            </div>
            {statusBadge(membership.status)}
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Organization</p>
              <p className="mt-1 text-sm">{membership.organization}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Department</p>
              <p className="mt-1 text-sm">{membership.department ?? "Unassigned"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Manager</p>
              <p className="mt-1 text-sm">{membership.manager ?? "None"}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Joined</p>
              <p className="mt-1 text-sm">{membership.joinedAt}</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium">Activation readiness</p>
            <span className="font-mono text-xs text-muted-foreground">82%</span>
          </div>
          <Progress value={82} className="h-2" />
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline">Department linked</Badge>
            <Badge variant="outline">Manager assigned</Badge>
            <Badge variant="outline">2 roles active</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RoleCatalogCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-6">
      <CardHeader>
        <CardTitle>Role Catalog</CardTitle>
        <CardDescription>Permission role definitions with scope differentiation for platform, org, module, and resource levels.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {roles.map((role) => (
          <div key={role.id} className="rounded-2xl border border-border/70 bg-background/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{role.name}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{role.code}</p>
              </div>
              {scopeBadge(role.scopeType)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function MembershipRoleAssignmentsCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-6">
      <CardHeader>
        <CardTitle>Membership Role Assignments</CardTitle>
        <CardDescription>Scoped access assignments across membership, role, module, and optional resource targets.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Membership</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Module</TableHead>
              <TableHead>Resource</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {membershipRoles.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell>{assignment.membership}</TableCell>
                <TableCell>{assignment.role}</TableCell>
                <TableCell>{assignment.module ?? "Platform-wide"}</TableCell>
                <TableCell>
                  {assignment.resourceType && assignment.resourceId
                    ? `${assignment.resourceType}:${assignment.resourceId}`
                    : "None"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function DepartmentHierarchyCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-5">
      <CardHeader>
        <CardTitle>Department Hierarchy</CardTitle>
        <CardDescription>Self-referencing org tree with leader ownership and downstream objective coverage.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {departments.map((department) => (
          <div
            key={department.id}
            className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 p-3"
            style={{ marginLeft: `${department.depth * 18}px` }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-border/70 p-2">
                {department.depth === 0 ? <Globe2 className="h-4 w-4 text-primary" /> : <FolderTree className="h-4 w-4 text-primary" />}
              </div>
              <div>
                <p className="font-medium">{department.name}</p>
                <p className="text-xs text-muted-foreground">{department.code} {department.leader ? `· ${department.leader}` : ""}</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function OrganizationAndAccessFormsCard() {
  return (
    <Card className="col-span-12 border-border/70 bg-card/95 shadow-[0_18px_50px_rgba(99,63,25,0.08)] xl:col-span-7">
      <CardHeader>
        <CardTitle>Admin Forms</CardTitle>
        <CardDescription>Edit surfaces for tenant setup, user identity review, and access assignment flows.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="organization" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="organization">Tenant</TabsTrigger>
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="access">Access</TabsTrigger>
          </TabsList>
          <TabsContent value="organization" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="org-name">Organization name</Label>
                <Input id="org-name" defaultValue="Acme Corp" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="org-slug">Slug</Label>
                <Input id="org-slug" defaultValue="acme-corp" />
              </div>
              <div className="grid gap-2">
                <Label>Industry</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industrial-tech">Industrial Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="emea">EMEA</SelectItem>
                    <SelectItem value="apac">APAC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="user" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="full-name">Full name</Label>
                <Input id="full-name" defaultValue="John Smith" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john@acmecorp.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="identity-notes">Identity notes</Label>
              <Textarea id="identity-notes" placeholder="Record invite, SSO, or provisioning notes." />
            </div>
          </TabsContent>
          <TabsContent value="access" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label>Membership</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose membership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="maya">Maya Patel</SelectItem>
                    <SelectItem value="daniel">Daniel Kim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="org-admin">Organization Admin</SelectItem>
                    <SelectItem value="strategy-manager">Strategy Manager</SelectItem>
                    <SelectItem value="reviewer">Reviewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Module</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Optional module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform">Platform & Collaboration Services</SelectItem>
                    <SelectItem value="planning">Strategic Planning</SelectItem>
                    <SelectItem value="risk">Risk & Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-5 flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save configuration</Button>
        </div>
      </CardContent>
    </Card>
  );
}
