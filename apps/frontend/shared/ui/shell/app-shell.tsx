"use client";

import * as React from "react";

import { AppHeader } from "@/components/app-header";
import { useAppSession } from "@/modules/platform/context/app-session-provider";

export function AppShell({
  children,
  moduleId,
}: {
  children: React.ReactNode;
  moduleId?: string;
}) {
  const { setActiveModuleId } = useAppSession();

  React.useEffect(() => {
    if (moduleId) {
      setActiveModuleId(moduleId);
    }
  }, [moduleId, setActiveModuleId]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
        {children}
      </main>
    </div>
  );
}
