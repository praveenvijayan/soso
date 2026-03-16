import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function EnterpriseOperatingModelLandingScreen() {
  return <DomainWorkspace moduleLabel="Enterprise Operating Model" owner="Operating Model Team" routeBase="enterprise-operating-model" description="Capabilities, operating structure, and service model decisions across the enterprise." dependencies={["search", "comments"]} />;
}
