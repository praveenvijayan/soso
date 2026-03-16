import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function BusinessStrategicPlanLandingScreen() {
  return <DomainWorkspace moduleLabel="Business Strategic Plan" owner="Planning Office" routeBase="business-strategic-plan" description="Business plans, initiative sequencing, and execution workflows for operating units." dependencies={["comments", "files", "notifications"]} />;
}
