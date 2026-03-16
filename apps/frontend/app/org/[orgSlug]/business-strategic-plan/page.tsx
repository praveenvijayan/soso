import { BusinessStrategicPlanRoute } from "@/modules/business-strategic-plan/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function BusinessStrategicPlanPage() {
  return <ModuleBoundary moduleId="business-strategic-plan"><BusinessStrategicPlanRoute /></ModuleBoundary>;
}
