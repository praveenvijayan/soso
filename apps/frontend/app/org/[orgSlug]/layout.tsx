import { AppShell } from "@/shared/ui/shell/app-shell";

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
