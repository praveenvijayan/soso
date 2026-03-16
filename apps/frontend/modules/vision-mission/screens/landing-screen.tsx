import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function VisionMissionLandingScreen() {
  return <DomainWorkspace moduleLabel="Vision & Mission" owner="Strategy Office" routeBase="vision-mission" description="Mission framing, narrative evolution, and alignment workflows for organizational direction." dependencies={["comments", "approvals", "search"]} />;
}
