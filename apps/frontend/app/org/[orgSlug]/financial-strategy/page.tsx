import { FinancialStrategyRoute } from "@/modules/financial-strategy/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function FinancialStrategyPage() {
  return <ModuleBoundary moduleId="financial-strategy"><FinancialStrategyRoute /></ModuleBoundary>;
}
