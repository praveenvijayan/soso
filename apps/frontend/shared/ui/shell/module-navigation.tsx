"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { moduleRegistry } from "@/modules/registry";
import { useAppSession } from "@/modules/platform/context/app-session-provider";

export function ModuleNavigation({ orgSlug }: { orgSlug: string }) {
  const { activeModuleId, setActiveModuleId, tenant } = useAppSession();

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {moduleRegistry.map((module) => {
        const permission = module.getPermission(tenant?.capabilities ?? {});
        return (
          <Link
            key={module.id}
            href={`/org/${orgSlug}/${module.routeBase}`}
            onClick={() => setActiveModuleId(module.id)}
          >
            <Card
              className={cn(
                "h-full border-border/70 transition-colors hover:border-foreground/30",
                activeModuleId === module.id && "border-foreground/40 bg-muted/60"
              )}
            >
              <CardContent className="flex h-full flex-col gap-4 p-5">
                <div className="flex items-center justify-between">
                  <module.icon className="h-5 w-5 text-primary" />
                  <Badge variant={permission.canAccess ? "secondary" : "outline"}>
                    {permission.canAccess ? "Enabled" : "Blocked"}
                  </Badge>
                </div>
                <div>
                  <div className="font-medium">{module.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
