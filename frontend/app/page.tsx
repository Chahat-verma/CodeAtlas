import AppLayout from "@/components/layout/AppLayout";
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">
          Welcome to CodeAtlas
        </h1>

        <p>
          Understand C++ execution through interactive visualization.
        </p>

        <Button>
          Get Started
        </Button>
      </div>
    </AppLayout>
  );
}