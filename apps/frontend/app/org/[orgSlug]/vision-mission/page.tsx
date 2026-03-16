import { VisionMissionRoute } from "@/modules/vision-mission/routes/page";
import { ModuleBoundary } from "@/shared/ui/shell/module-boundary";
export default function VisionMissionPage() {
  return <ModuleBoundary moduleId="vision-mission"><VisionMissionRoute /></ModuleBoundary>;
}
