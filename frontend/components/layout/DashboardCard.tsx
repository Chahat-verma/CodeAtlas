import { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function DashboardCard({
  title,
  description,
  children,
}: DashboardCardProps) {
  return (
    <section className="rounded-lg border border-border bg-card p-8 shadow-sm">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-muted-foreground">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </section>
  );
}