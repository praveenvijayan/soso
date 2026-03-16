import { EnterpriseOperatingModelRoute } from "@/modules/enterprise-operating-model/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function EnterpriseOperatingModelPage() {
  return <ModuleBoundary moduleId="enterprise-operating-model"><EnterpriseOperatingModelRoute /></ModuleBoundary>;
}
