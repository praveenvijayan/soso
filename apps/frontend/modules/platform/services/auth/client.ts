import { serviceRequest } from "@/modules/platform/services/http/client";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getAuthState(): Promise<DomainServiceResult<{ status: "authenticated" | "anonymous" }>> {
  return serviceRequest(
    async () => ({ status: "authenticated" }),
    { context: { moduleId: "platform", trace: "auth:state" } }
  );
}
