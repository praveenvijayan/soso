import { serviceRequest } from "@/modules/platform/services/http/client";
import type { RiskManagementStrategySummary } from "@/modules/risk-management-strategy/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getRiskManagementStrategySummary(): Promise<DomainServiceResult<RiskManagementStrategySummary>> {
  return serviceRequest(
    async () => ({ riskThemes: 9, treatmentsOpen: 14 }),
    { context: { moduleId: "risk-management-strategy", trace: "risk-management-strategy:summary" } }
  );
}
