import { serviceRequest } from "@/modules/platform/services/http/client";
import type { CorporateStrategySummary } from "@/modules/corporate-strategy/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getCorporateStrategySummary(): Promise<DomainServiceResult<CorporateStrategySummary>> {
  return serviceRequest(
    async () => ({ objectiveCount: 16, activeCycles: 2 }),
    { context: { moduleId: "corporate-strategy", trace: "corporate-strategy:summary" } }
  );
}
