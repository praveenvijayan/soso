import { serviceRequest } from "@/modules/platform/services/http/client";
import type { FinancialStrategySummary } from "@/modules/financial-strategy/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getFinancialStrategySummary(): Promise<DomainServiceResult<FinancialStrategySummary>> {
  return serviceRequest(
    async () => ({ budgetPlans: 8, forecastVariance: "-2.1%" }),
    { context: { moduleId: "financial-strategy", trace: "financial-strategy:summary" } }
  );
}
