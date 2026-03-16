export interface PermissionCheck {
  canAccess: boolean;
  actions: Record<string, boolean>;
}

export interface MembershipSummary {
  id: string;
  organizationId: string;
  organizationName: string;
  title: string;
  roleCodes: string[];
}

export interface TenantContext {
  orgId: string;
  slug: string;
  name: string;
  membership: MembershipSummary | null;
  capabilities: Record<string, PermissionCheck>;
}

export interface AppSession {
  authState: "authenticated" | "anonymous" | "loading";
  user: {
    id: string;
    fullName: string;
    email: string;
  } | null;
  activeOrgSlug: string | null;
  accessibleModules: string[];
  notifications: {
    unreadCount: number;
    pendingApprovals: number;
  };
}
