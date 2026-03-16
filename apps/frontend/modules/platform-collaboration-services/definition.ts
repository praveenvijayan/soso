import { Waypoints } from "lucide-react";
import type { ModuleDefinition } from "@/modules/platform/types/module-definition";
import { PLATFORM_COLLABORATION_SERVICES_ROUTE_BASE } from "@/modules/platform-collaboration-services/constants";
import { getPlatformCollaborationServicesPermission } from "@/modules/platform-collaboration-services/permissions";

export const platformCollaborationServicesModule: ModuleDefinition = {
  id: "platform-collaboration-services",
  label: "Platform & Collaboration Services",
  shortLabel: "Platform",
  routeBase: PLATFORM_COLLABORATION_SERVICES_ROUTE_BASE,
  icon: Waypoints,
  owner: "Platform Team",
  description: "Tenancy, identity, collaboration, search, comments, and approvals platform services.",
  platformDependencies: ["auth", "tenancy", "session", "audit", "notifications", "search", "comments", "approvals", "files", "dashboard"],
  screenRegistry: {
    landing: "PlatformCollaborationServicesLandingScreen",
    index: "PlatformCollaborationServicesIndexScreen",
    detail: "PlatformCollaborationServicesDetailScreen",
    create: "PlatformCollaborationServicesCreateScreen",
    settings: "PlatformCollaborationServicesSettingsScreen",
  },
  getPermission: getPlatformCollaborationServicesPermission,
  widgets: [{ id: "tenant-admin", moduleId: "platform-collaboration-services", title: "Tenant administration", description: "Organizations and membership summary.", emptyState: "No platform data yet." }],
};
