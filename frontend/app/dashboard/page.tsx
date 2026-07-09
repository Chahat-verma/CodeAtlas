import AppLayout from "@/components/layout/AppLayout";
import DashboardActionCard from "@/components/layout/DashboardActionCard";
import PageHeader from "@/components/layout/PageHeader";
import DashboardGrid from "@/components/layout/DashboardGrid";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <PageHeader
          title="Dashboard"
          description="Welcome to CodeAtlas. Choose where you want to begin."
        />

        <DashboardGrid>
          <DashboardActionCard
            title="Getting Started"
            description="Learn how CodeAtlas works."
            href="/"
          />

          <DashboardActionCard
            title="Playground"
            description="Write and visualize C++ code."
            href="/playground"
          />

          <DashboardActionCard
            title="Examples"
            description="Browse interactive examples."
            href="/examples"
          />
        </DashboardGrid>
      </div>
    </AppLayout>
  );
}
