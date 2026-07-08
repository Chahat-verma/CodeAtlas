import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">
          CodeAtlas
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}