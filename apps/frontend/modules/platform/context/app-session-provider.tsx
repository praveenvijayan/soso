"use client";

import * as React from "react";

import { getMockSession, getMockTenantContext } from "@/modules/platform/services/session/bootstrap";
import type { AppSession, TenantContext } from "@/modules/platform/types/session";

interface AppSessionContextValue {
  session: AppSession | null;
  tenant: TenantContext | null;
  activeModuleId: string | null;
  setActiveModuleId: (moduleId: string) => void;
  loading: boolean;
}

const AppSessionContext = React.createContext<AppSessionContextValue | null>(null);

export function AppSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = React.useState<AppSession | null>(null);
  const [tenant, setTenant] = React.useState<TenantContext | null>(null);
  const [activeModuleId, setActiveModuleId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function bootstrap() {
      const nextSession = await getMockSession();
      const nextTenant = await getMockTenantContext(nextSession.activeOrgSlug ?? "acme-corp");
      setSession(nextSession);
      setTenant(nextTenant);
      setLoading(false);
    }

    void bootstrap();
  }, []);

  const value = React.useMemo(
    () => ({
      session,
      tenant,
      activeModuleId,
      setActiveModuleId,
      loading,
    }),
    [session, tenant, activeModuleId, loading]
  );

  return <AppSessionContext.Provider value={value}>{children}</AppSessionContext.Provider>;
}

export function useAppSession() {
  const context = React.useContext(AppSessionContext);
  if (!context) {
    throw new Error("useAppSession must be used within AppSessionProvider");
  }
  return context;
}
