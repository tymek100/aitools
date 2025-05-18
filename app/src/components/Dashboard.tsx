import { Link } from 'react-router-dom';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 p-4 border-r h-screen">
        <h2 className="text-lg font-bold mb-4">AI Tools</h2>
        <ul>
          <li>
            <Link to="/dashboard/summarizer" className="text-blue-500">Text Summarizer</Link>
          </li>
          {/* Add more tools here */}
        </ul>
      </aside>
      <main className="p-4 flex-1">
        {children}
      </main>
    </div>
  );
}
