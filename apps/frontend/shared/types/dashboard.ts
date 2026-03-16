export interface DashboardWidgetDataPoint {
  label: string;
  value: string;
  tone?: "default" | "positive" | "warning" | "danger";
}

export interface DashboardWidgetDefinition {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  emptyState: string;
}
