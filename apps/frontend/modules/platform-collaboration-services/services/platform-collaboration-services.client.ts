import { serviceRequest } from "@/modules/platform/services/http/client";
import type { PlatformCollaborationServicesSummary } from "@/modules/platform-collaboration-services/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getPlatformCollaborationServicesSummary(): Promise<DomainServiceResult<PlatformCollaborationServicesSummary>> {
  return serviceRequest(
    async () => ({ organizations: 128, activeMemberships: 12944 }),
    { context: { moduleId: "platform-collaboration-services", trace: "platform-collaboration-services:summary" } }
  );
}
