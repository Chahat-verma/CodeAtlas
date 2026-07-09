import AppLayout from "@/components/layout/AppLayout";
import PageHeader from "@/components/layout/PageHeader";
import CodeEditor from "@/components/layout/CodeEditor";
import PlaygroundLayout from "@/components/layout/PlaygroundLayout";

export default function PlaygroundPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <PageHeader
          title="Playground"
          description="Write C++ code and visualize its execution."
        />

        <PlaygroundLayout
          editor={<CodeEditor />}
          visualization={
            <>
              <h2 className="text-lg font-semibold">
                Visualization
              </h2>

              <p className="mt-2 text-muted-foreground">
                Execution timeline, memory, variables, and call stack will appear here.
              </p>
            </>
          }
        />
      </div>
    </AppLayout>
  );
}