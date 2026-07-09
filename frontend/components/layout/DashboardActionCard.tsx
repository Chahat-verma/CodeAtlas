import Link from "next/link";
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
      <DashboardCard
        title={title}
        description={description}
      />
    </Link>
  );
}