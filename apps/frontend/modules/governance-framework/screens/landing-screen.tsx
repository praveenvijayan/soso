import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function GovernanceFrameworkLandingScreen() {
  return <DomainWorkspace moduleLabel="Governance Framework" owner="Governance Office" routeBase="governance-framework" description="Policies, governance forums, decisions, and approval choreography for organizational control." dependencies={["approvals", "comments", "notifications"]} />;
}
