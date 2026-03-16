import { ModuleNavigation } from "@/shared/ui/shell/module-navigation";
import { PageHeader } from "@/shared/ui/shell/page-header";

export default async function OrganizationHomePage({
  params,
}: {
  params: Promise<{ orgSlug: string }>;
}) {
  const { orgSlug } = await params;

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Tenant workspace"
        title="Domain modules"
        description="Each domain owns its screens, workflows, business rules, permissions, schema boundaries, and service clients while sharing platform services."
      />
      <ModuleNavigation orgSlug={orgSlug} />
    </div>
  );
}
