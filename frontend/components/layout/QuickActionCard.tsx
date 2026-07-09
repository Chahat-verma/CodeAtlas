import { ArrowRight } from "lucide-react";

type QuickActionCardProps = {
  title: string;
  description: string;
};

export default function QuickActionCard({
  title,
  description,
}: QuickActionCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition-colors hover:bg-accent/40">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <ArrowRight className="h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  );
}