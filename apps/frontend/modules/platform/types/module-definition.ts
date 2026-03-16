import type { LucideIcon } from "lucide-react";

import type { DashboardWidgetDefinition } from "@/shared/types/dashboard";
import type { PermissionCheck } from "@/modules/platform/types/session";

export interface ModuleDefinition {
  id: string;
  label: string;
  shortLabel: string;
  routeBase: string;
  icon: LucideIcon;
  owner: string;
  description: string;
  platformDependencies: string[];
  screenRegistry: {
    landing: string;
    index: string;
    detail: string;
    create: string;
    workflow?: string;
    settings?: string;
  };
  getPermission: (capabilities: Record<string, PermissionCheck>) => PermissionCheck;
  widgets?: DashboardWidgetDefinition[];
}
