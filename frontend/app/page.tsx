import AppLayout from "@/components/layout/AppLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <AppLayout>
      <SectionHeader
        title="Dashboard"
        description="Welcome to CodeAtlas. Choose where you want to begin."
      />
      <Button>Get Started</Button>
    </AppLayout>
  );
}
