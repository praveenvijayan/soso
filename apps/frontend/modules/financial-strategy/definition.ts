import { HandCoins } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { FINANCIAL_STRATEGY_ROUTE_BASE } from "@/modules/financial-strategy/constants";
import { getFinancialStrategyPermission } from "@/modules/financial-strategy/permissions";

export const financialStrategyModule: ModuleDefinition = {
  id: "financial-strategy",
  label: "Financial Strategy",
  shortLabel: "Finance",
  routeBase: FINANCIAL_STRATEGY_ROUTE_BASE,
  icon: HandCoins,
  owner: "Finance Strategy Team",
  description: "Budget strategy, funding choices, and financial planning views.",
  platformDependencies: ["notifications", "files", "search"],
  screenRegistry: {
    landing: "FinancialStrategyLandingScreen",
    index: "FinancialStrategyIndexScreen",
    detail: "FinancialStrategyDetailScreen",
    create: "FinancialStrategyCreateScreen",
    workflow: "FinancialStrategyWorkflowInboxScreen",
  },
  getPermission: getFinancialStrategyPermission,
  widgets: [{ id: "financial-plans", moduleId: "financial-strategy", title: "Financial plans", description: "Plan count and variance summary.", emptyState: "No financial plan data yet." }],
};
