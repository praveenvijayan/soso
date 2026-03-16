import { serviceRequest } from "@/modules/platform/services/http/client";
import type { GovernanceFrameworkSummary } from "@/modules/governance-framework/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getGovernanceFrameworkSummary(): Promise<DomainServiceResult<GovernanceFrameworkSummary>> {
  return serviceRequest(
    async () => ({ policyCount: 21, pendingApprovals: 6 }),
    { context: { moduleId: "governance-framework", trace: "governance-framework:summary" } }
  );
}
