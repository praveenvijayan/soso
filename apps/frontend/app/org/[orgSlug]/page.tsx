import { ExecutiveDashboardScreen } from "@/modules/platform/screens/executive-dashboard-screen";

export default async function OrganizationHomePage({
  params,
}: {
  params: Promise<{ orgSlug: string }>;
}) {
  const { orgSlug } = await params;

  return <ExecutiveDashboardScreen orgSlug={orgSlug} />;
}
