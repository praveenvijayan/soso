import { serviceRequest } from "@/modules/platform/services/http/client";
import type { BusinessStrategicPlanSummary } from "@/modules/business-strategic-plan/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getBusinessStrategicPlanSummary(): Promise<DomainServiceResult<BusinessStrategicPlanSummary>> {
  return serviceRequest(
    async () => ({ planCount: 5, initiativesInFlight: 23 }),
    { context: { moduleId: "business-strategic-plan", trace: "business-strategic-plan:summary" } }
  );
}
