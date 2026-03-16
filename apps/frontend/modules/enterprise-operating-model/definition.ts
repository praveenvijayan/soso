import { Network } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { ENTERPRISE_OPERATING_MODEL_ROUTE_BASE } from "@/modules/enterprise-operating-model/constants";
import { getEnterpriseOperatingModelPermission } from "@/modules/enterprise-operating-model/permissions";

export const enterpriseOperatingModelModule: ModuleDefinition = {
  id: "enterprise-operating-model",
  label: "Enterprise Operating Model",
  shortLabel: "Operating Model",
  routeBase: ENTERPRISE_OPERATING_MODEL_ROUTE_BASE,
  icon: Network,
  owner: "Operating Model Team",
  description: "Capabilities, services, and enterprise structure views.",
  platformDependencies: ["search", "comments"],
  screenRegistry: {
    landing: "EnterpriseOperatingModelLandingScreen",
    index: "EnterpriseOperatingModelIndexScreen",
    detail: "EnterpriseOperatingModelDetailScreen",
    create: "EnterpriseOperatingModelCreateScreen",
  },
  getPermission: getEnterpriseOperatingModelPermission,
  widgets: [{ id: "capability-map", moduleId: "enterprise-operating-model", title: "Capability maps", description: "Model and capability mapping summary.", emptyState: "No model data yet." }],
};
