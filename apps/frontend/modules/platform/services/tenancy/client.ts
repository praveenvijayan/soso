import { serviceRequest } from "@/modules/platform/services/http/client";
import type { DomainServiceResult } from "@/shared/types/service";

export async function listAccessibleTenants(): Promise<DomainServiceResult<{ slug: string; name: string }[]>> {
  return serviceRequest(
    async () => [
      { slug: "acme-corp", name: "Acme Corp" },
      { slug: "global-hq", name: "Global HQ" },
    ],
    { context: { moduleId: "platform", trace: "tenancy:list" } }
  );
}
