import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DashboardCard from "./DashboardCard";

type DashboardActionCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function DashboardActionCard({
  title,
  description,
  href,
}: DashboardActionCardProps) {
  return (
    <Link
      href={href}
      className="block transition-transform duration-200 hover:-translate-y-1"
    >
      <DashboardCard title={title} description={description}>
        <div className="flex justify-end">
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
        </div>
      </DashboardCard>
    </Link>
  );
}