import { DomainWorkspace } from "@/shared/ui/shell/domain-workspace";
export function FinancialStrategyLandingScreen() {
  return <DomainWorkspace moduleLabel="Financial Strategy" owner="Finance Strategy Team" routeBase="financial-strategy" description="Financial planning, budget scenarios, and strategic allocation views for enterprise finance." dependencies={["notifications", "files", "search"]} />;
}
