import { Landmark } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { GOVERNANCE_FRAMEWORK_ROUTE_BASE } from "@/modules/governance-framework/constants";
import { getGovernanceFrameworkPermission } from "@/modules/governance-framework/permissions";

export const governanceFrameworkModule: ModuleDefinition = {
  id: "governance-framework",
  label: "Governance Framework",
  shortLabel: "Governance",
  routeBase: GOVERNANCE_FRAMEWORK_ROUTE_BASE,
  icon: Landmark,
  owner: "Governance Office",
  description: "Governance forums, policies, and approvals.",
  platformDependencies: ["approvals", "comments", "notifications"],
  screenRegistry: {
    landing: "GovernanceFrameworkLandingScreen",
    index: "GovernanceFrameworkIndexScreen",
    detail: "GovernanceFrameworkDetailScreen",
    create: "GovernanceFrameworkCreateScreen",
    workflow: "GovernanceFrameworkWorkflowInboxScreen",
  },
  getPermission: getGovernanceFrameworkPermission,
  widgets: [{ id: "governance-decisions", moduleId: "governance-framework", title: "Governance decisions", description: "Policy and approval summary.", emptyState: "No governance data yet." }],
};
