import { RiskManagementStrategyRoute } from "@/modules/risk-management-strategy/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function RiskManagementStrategyPage() {
  return <ModuleBoundary moduleId="risk-management-strategy"><RiskManagementStrategyRoute /></ModuleBoundary>;
}
