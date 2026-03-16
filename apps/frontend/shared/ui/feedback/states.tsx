import { AlertTriangle, Building2, Lock, SearchX, UserX } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StateCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: typeof AlertTriangle;
}) {
  return (
    <Card className="border-dashed bg-background/70">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-full border p-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{description}</CardContent>
    </Card>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <StateCard title={title} description={description} icon={SearchX} />;
}

export function ForbiddenState() {
  return (
    <StateCard
      title="No access"
      description="Your membership does not currently allow access to this module."
      icon={Lock}
    />
  );
}

export function ErrorState({ description }: { description: string }) {
  return <StateCard title="Something went wrong" description={description} icon={AlertTriangle} />;
}

export function NoTenantState() {
  return (
    <StateCard
      title="No active tenant"
      description="Select an organization to bootstrap tenant-scoped modules and workflows."
      icon={Building2}
    />
  );
}

export function NoMembershipState() {
  return (
    <StateCard
      title="No membership context"
      description="Your identity is authenticated, but there is no active membership for this organization."
      icon={UserX}
    />
  );
}
