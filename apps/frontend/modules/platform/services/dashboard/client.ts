import type { DomainServiceResult } from "@/shared/types/service";
import { serviceRequest } from "@/modules/platform/services/http/client";
import { moduleRegistry } from "@/modules/registry";

export async function listDashboardWidgets(): Promise<DomainServiceResult<{ count: number; moduleIds: string[] }>> {
  return serviceRequest(
    async () => ({
      count: moduleRegistry.flatMap((module) => module.widgets ?? []).length,
      moduleIds: moduleRegistry.map((module) => module.id),
    }),
    { context: { moduleId: "platform", trace: "dashboard:widgets" } }
  );
}
