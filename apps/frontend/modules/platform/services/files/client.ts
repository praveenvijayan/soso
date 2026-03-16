import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";

export async function listFileReferences(): Promise<DomainServiceResult<{ count: number }>> {
  return serviceRequest(
    async () => ({ count: 28 }),
    { context: { moduleId: "platform", trace: "files:list" } }
  );
}
