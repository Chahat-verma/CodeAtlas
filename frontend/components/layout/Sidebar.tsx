export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 p-6 dark:border-gray-800">
      <nav>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Playground</li>
          <li>Examples</li>
          <li>Documentation</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}