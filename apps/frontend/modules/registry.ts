import { businessStrategicPlanModule } from "@/modules/business-strategic-plan/definition";
import { corporateStrategyModule } from "@/modules/corporate-strategy/definition";
import { enterpriseOperatingModelModule } from "@/modules/enterprise-operating-model/definition";
import { financialStrategyModule } from "@/modules/financial-strategy/definition";
import { governanceFrameworkModule } from "@/modules/governance-framework/definition";
import { platformCollaborationServicesModule } from "@/modules/platform-collaboration-services/definition";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { riskManagementStrategyModule } from "@/modules/risk-management-strategy/definition";
import { visionMissionModule } from "@/modules/vision-mission/definition";

export const moduleRegistry: ModuleDefinition[] = [
  visionMissionModule,
  corporateStrategyModule,
  businessStrategicPlanModule,
  enterpriseOperatingModelModule,
  governanceFrameworkModule,
  riskManagementStrategyModule,
  financialStrategyModule,
  platformCollaborationServicesModule,
];

export function findModuleByRouteBase(routeBase: string) {
  return moduleRegistry.find((module) => module.routeBase === routeBase);
}
