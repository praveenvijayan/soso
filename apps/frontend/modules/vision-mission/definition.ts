import { Compass } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { getVisionMissionPermission } from "@/modules/vision-mission/permissions";
import { VISION_MISSION_ROUTE_BASE } from "@/modules/vision-mission/constants";

export const visionMissionModule: ModuleDefinition = {
  id: "vision-mission",
  label: "Vision & Mission",
  shortLabel: "Vision",
  routeBase: VISION_MISSION_ROUTE_BASE,
  icon: Compass,
  owner: "Strategy Office",
  description: "Narrative direction, mission framing, and alignment.",
  platformDependencies: ["comments", "approvals", "search"],
  screenRegistry: {
    landing: "VisionMissionLandingScreen",
    index: "VisionMissionIndexScreen",
    detail: "VisionMissionDetailScreen",
    create: "VisionMissionCreateScreen",
    workflow: "VisionMissionWorkflowInboxScreen",
  },
  getPermission: getVisionMissionPermission,
  widgets: [{ id: "vision-alignment", moduleId: "vision-mission", title: "Vision alignment", description: "Mission publishing and alignment summary.", emptyState: "No vision data yet." }],
};
