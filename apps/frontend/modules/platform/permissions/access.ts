import type { PermissionCheck } from "@/modules/platform/types/session";

export function fallbackPermission(): PermissionCheck {
  return {
    canAccess: false,
    actions: {},
  };
}

export function resolveModulePermission(
  moduleId: string,
  capabilities: Record<string, PermissionCheck>
): PermissionCheck {
  return capabilities[moduleId] ?? fallbackPermission();
}
