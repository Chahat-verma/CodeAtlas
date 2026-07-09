import { ReactNode } from "react";

type PlaygroundLayoutProps = {
  editor: ReactNode;
  visualization: ReactNode;
};

export default function PlaygroundLayout({
  editor,
  visualization,
}: PlaygroundLayoutProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-lg border border-border bg-card p-6">
        {editor}
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        {visualization}
      </section>
    </div>
  );
}