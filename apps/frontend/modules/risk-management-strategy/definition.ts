import { ShieldAlert } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { RISK_MANAGEMENT_STRATEGY_ROUTE_BASE } from "@/modules/risk-management-strategy/constants";
import { getRiskManagementStrategyPermission } from "@/modules/risk-management-strategy/permissions";

export const riskManagementStrategyModule: ModuleDefinition = {
  id: "risk-management-strategy",
  label: "Risk Management Strategy",
  shortLabel: "Risk",
  routeBase: RISK_MANAGEMENT_STRATEGY_ROUTE_BASE,
  icon: ShieldAlert,
  owner: "Enterprise Risk Team",
  description: "Risk posture, treatment, and mitigation strategy.",
  platformDependencies: ["comments", "approvals", "files"],
  screenRegistry: {
    landing: "RiskManagementStrategyLandingScreen",
    index: "RiskManagementStrategyIndexScreen",
    detail: "RiskManagementStrategyDetailScreen",
    create: "RiskManagementStrategyCreateScreen",
    workflow: "RiskManagementStrategyWorkflowInboxScreen",
  },
  getPermission: getRiskManagementStrategyPermission,
  widgets: [{ id: "risk-treatments", moduleId: "risk-management-strategy", title: "Risk treatments", description: "Risk themes and open treatments.", emptyState: "No risk data yet." }],
};
