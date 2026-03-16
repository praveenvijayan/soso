import { GovernanceFrameworkRoute } from "@/modules/governance-framework/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function GovernanceFrameworkPage() {
  return <ModuleBoundary moduleId="governance-framework"><GovernanceFrameworkRoute /></ModuleBoundary>;
}
