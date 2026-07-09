import AppLayout from "@/components/layout/AppLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import QuickActionCard from "@/components/layout/QuickActionCard";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <SectionHeader
          title="Dashboard"
          description="Welcome to CodeAtlas. Choose where you want to begin."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <QuickActionCard
            title="Open Playground"
            description="Start visualizing C++ programs step by step."
          />

          <QuickActionCard
            title="Browse Examples"
            description="Explore ready-made examples to learn faster."
          />

          <QuickActionCard
            title="Documentation"
            description="Understand how CodeAtlas works."
          />
        </div>
      </div>
    </AppLayout>
  );
}