import { Activity, Building2, ClipboardList, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/shared/ui/shell/page-header";

export function DomainWorkspace({
  moduleLabel,
  owner,
  routeBase,
  description,
  dependencies,
}: {
  moduleLabel: string;
  owner: string;
  routeBase: string;
  description: string;
  dependencies: string[];
}) {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={moduleLabel}
        title={`${moduleLabel} workspace`}
        description={description}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Ownership</CardTitle>
              <Building2 className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{owner}</CardContent>
        </Card>
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Route base</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="font-mono text-sm text-muted-foreground">/{routeBase}</CardContent>
        </Card>
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Dependencies</CardTitle>
              <ShieldCheck className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {dependencies.map((dependency) => (
              <Badge key={dependency} variant="outline">{dependency}</Badge>
            ))}
          </CardContent>
        </Card>
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Workflows</CardTitle>
              <ClipboardList className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Landing, index, detail, create/edit, and workflow inbox patterns are scaffolded for this module.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
