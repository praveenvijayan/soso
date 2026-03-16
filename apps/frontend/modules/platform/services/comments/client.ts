import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";

export async function listComments(resourceId: string): Promise<DomainServiceResult<{ resourceId: string; count: number }>> {
  return serviceRequest(
    async () => ({ resourceId, count: 4 }),
    { context: { moduleId: "platform", trace: "comments:list" } }
  );
}
