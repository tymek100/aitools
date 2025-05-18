import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import TextSummarizer from '../components/tools/TextSummarizer';

export default function DashboardPage() {
  return (
    <Dashboard>
      <Routes>
        <Route path="summarizer" element={<TextSummarizer />} />
        {/* Future tools can be added here */}
      </Routes>
    </Dashboard>
  );
}
