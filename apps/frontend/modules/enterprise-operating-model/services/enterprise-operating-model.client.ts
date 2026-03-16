import { serviceRequest } from "@/modules/platform/services/http/client";
import type { EnterpriseOperatingModelSummary } from "@/modules/enterprise-operating-model/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getEnterpriseOperatingModelSummary(): Promise<DomainServiceResult<EnterpriseOperatingModelSummary>> {
  return serviceRequest(
    async () => ({ modelCount: 3, capabilityMaps: 11 }),
    { context: { moduleId: "enterprise-operating-model", trace: "enterprise-operating-model:summary" } }
  );
}
