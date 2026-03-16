import { CorporateStrategyRoute } from "@/modules/corporate-strategy/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function CorporateStrategyPage() {
  return <ModuleBoundary moduleId="corporate-strategy"><CorporateStrategyRoute /></ModuleBoundary>;
}
