import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";

export async function listPendingApprovals(): Promise<DomainServiceResult<{ count: number }>> {
  return serviceRequest(
    async () => ({ count: 3 }),
    { context: { moduleId: "platform", trace: "approvals:list" } }
  );
}
