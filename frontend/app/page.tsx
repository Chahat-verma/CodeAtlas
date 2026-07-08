import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/typography/Heading";

export default function HomePage() {
  return (
    <AppLayout>
      <Container>
        <Card>
          <Heading>Welcome to CodeAtlas</Heading>

          <p className="mt-4 text-gray-500">
            The interactive C++ visualization workspace will be built here.
          </p>

          <Button className="mt-6">
            Get Started
          </Button>
        </Card>
      </Container>
    </AppLayout>
  );
}