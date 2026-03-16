import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";

export async function searchEverywhere(query: string): Promise<DomainServiceResult<{ query: string; hits: number }>> {
  return serviceRequest(
    async () => ({ query, hits: query ? 12 : 0 }),
    { context: { moduleId: "platform", trace: "search:global" } }
  );
}
