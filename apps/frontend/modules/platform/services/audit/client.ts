import { serviceRequest } from "@/modules/platform/services/http/client";
import type { DomainServiceResult } from "@/shared/types/service";

export async function emitAuditEvent(eventName: string): Promise<DomainServiceResult<{ accepted: boolean; eventName: string }>> {
  return serviceRequest(
    async () => ({ accepted: true, eventName }),
    { context: { moduleId: "platform", trace: "audit:emit" } }
  );
}
