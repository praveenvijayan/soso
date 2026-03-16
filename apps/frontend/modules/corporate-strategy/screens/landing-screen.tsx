import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function CorporateStrategyLandingScreen() {
  return <DomainWorkspace moduleLabel="Corporate Strategy" owner="Corporate Strategy Team" routeBase="corporate-strategy" description="Strategic objectives, portfolio framing, and executive decision support for enterprise strategy." dependencies={["comments", "files", "search", "approvals"]} />;
}
