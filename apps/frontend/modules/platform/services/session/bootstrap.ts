import type { AppSession, TenantContext } from "@/modules/platform/types/session";

const baseCapabilities = {
  "vision-mission": { canAccess: true, actions: { view: true, edit: true, approve: true } },
  "corporate-strategy": { canAccess: true, actions: { view: true, edit: true, approve: false } },
  "business-strategic-plan": { canAccess: true, actions: { view: true, edit: true, approve: false } },
  "enterprise-operating-model": { canAccess: true, actions: { view: true, edit: false, approve: false } },
  "governance-framework": { canAccess: true, actions: { view: true, edit: true, approve: true } },
  "risk-management-strategy": { canAccess: true, actions: { view: true, edit: true, approve: true } },
  "financial-strategy": { canAccess: true, actions: { view: true, edit: false, approve: false } },
  "platform-collaboration-services": { canAccess: true, actions: { view: true, edit: true, approve: true } },
} as const;

export async function getMockSession(): Promise<AppSession> {
  return {
    authState: "authenticated",
    user: {
      id: "usr_001",
      fullName: "John Smith",
      email: "john@acmecorp.com",
    },
    activeOrgSlug: "acme-corp",
    accessibleModules: Object.keys(baseCapabilities),
    notifications: {
      unreadCount: 7,
      pendingApprovals: 3,
    },
  };
}

export async function getMockTenantContext(orgSlug: string): Promise<TenantContext> {
  return {
    orgId: "org_001",
    slug: orgSlug,
    name: "Acme Corp",
    membership: {
      id: "mem_001",
      organizationId: "org_001",
      organizationName: "Acme Corp",
      title: "Strategy Manager",
      roleCodes: ["org_admin", "strategy_manager"],
    },
    capabilities: baseCapabilities,
  };
}
