import { PlatformCollaborationServicesRoute } from "@/modules/platform-collaboration-services/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function PlatformCollaborationServicesPage() {
  return <ModuleBoundary moduleId="platform-collaboration-services"><PlatformCollaborationServicesRoute /></ModuleBoundary>;
}
