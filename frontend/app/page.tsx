import AppLayout from "@/components/layout/AppLayout";
import PageHeader from "@/components/layout/PageHeader";
import DashboardActionCard from "@/components/layout/DashboardActionCard";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <PageHeader
          title="Dashboard"
          description="Welcome to CodeAtlas. Choose where you want to begin."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <DashboardActionCard
            title="Open Playground"
            description="Start visualizing C++ programs step by step."
            href="/"
          />

          <DashboardActionCard
            title="Browse Examples"
            description="Explore ready-made examples to learn faster."
            href="/"
          />

          <DashboardActionCard
            title="Documentation"
            description="Understand how CodeAtlas works."
            href="/"
          />
        </div>
      </div>
    </AppLayout>
  );
}