import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";

export async function listNotifications(): Promise<DomainServiceResult<{ unread: number; latest: string[] }>> {
  return serviceRequest(
    async () => ({
      unread: 7,
      latest: ["Quarterly review due", "Two approvals are pending"],
    }),
    { context: { moduleId: "platform", trace: "notifications:list" } }
  );
}
