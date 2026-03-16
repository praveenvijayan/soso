"use client";

import * as React from "react";

import { useAppSession } from "@/modules/platform/context/app-session-provider";

export function ModuleBoundary({
  moduleId,
  children,
}: {
  moduleId: string;
  children: React.ReactNode;
}) {
  const { setActiveModuleId } = useAppSession();

  React.useEffect(() => {
    setActiveModuleId(moduleId);
  }, [moduleId, setActiveModuleId]);

  return <>{children}</>;
}
