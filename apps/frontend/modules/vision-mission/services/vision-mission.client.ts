import { serviceRequest } from "@/modules/platform/services/http/client";
import type { VisionMissionSummary } from "@/modules/vision-mission/schemas";
import type { DomainServiceResult } from "@/shared/types/service";

export async function getVisionMissionSummary(): Promise<DomainServiceResult<VisionMissionSummary>> {
  return serviceRequest(
    async () => ({ missionCount: 4, publishedCount: 2 }),
    { context: { moduleId: "vision-mission", trace: "vision-mission:summary" } }
  );
}
