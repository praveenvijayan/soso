import { BriefcaseBusiness } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { BUSINESS_STRATEGIC_PLAN_ROUTE_BASE } from "@/modules/business-strategic-plan/constants";
import { getBusinessStrategicPlanPermission } from "@/modules/business-strategic-plan/permissions";

export const businessStrategicPlanModule: ModuleDefinition = {
  id: "business-strategic-plan",
  label: "Business Strategic Plan",
  shortLabel: "Plans",
  routeBase: BUSINESS_STRATEGIC_PLAN_ROUTE_BASE,
  icon: BriefcaseBusiness,
  owner: "Planning Office",
  description: "Business planning, initiatives, and execution views for units.",
  platformDependencies: ["comments", "files", "notifications"],
  screenRegistry: {
    landing: "BusinessStrategicPlanLandingScreen",
    index: "BusinessStrategicPlanIndexScreen",
    detail: "BusinessStrategicPlanDetailScreen",
    create: "BusinessStrategicPlanCreateScreen",
    workflow: "BusinessStrategicPlanWorkflowInboxScreen",
  },
  getPermission: getBusinessStrategicPlanPermission,
  widgets: [{ id: "plan-progress", moduleId: "business-strategic-plan", title: "Plan progress", description: "Initiatives and plan delivery summary.", emptyState: "No plans yet." }],
};
