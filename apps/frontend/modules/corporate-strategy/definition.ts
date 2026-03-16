import { Target } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { CORPORATE_STRATEGY_ROUTE_BASE } from "@/modules/corporate-strategy/constants";
import { getCorporateStrategyPermission } from "@/modules/corporate-strategy/permissions";

export const corporateStrategyModule: ModuleDefinition = {
  id: "corporate-strategy",
  label: "Corporate Strategy",
  shortLabel: "Strategy",
  routeBase: CORPORATE_STRATEGY_ROUTE_BASE,
  icon: Target,
  owner: "Corporate Strategy Team",
  description: "Objectives, strategic choices, and enterprise portfolio framing.",
  platformDependencies: ["comments", "files", "search", "approvals"],
  screenRegistry: {
    landing: "CorporateStrategyLandingScreen",
    index: "CorporateStrategyIndexScreen",
    detail: "CorporateStrategyDetailScreen",
    create: "CorporateStrategyCreateScreen",
    workflow: "CorporateStrategyWorkflowInboxScreen",
  },
  getPermission: getCorporateStrategyPermission,
  widgets: [{ id: "strategy-objectives", moduleId: "corporate-strategy", title: "Strategic objectives", description: "Objective and cycle summary.", emptyState: "No objectives yet." }],
};
