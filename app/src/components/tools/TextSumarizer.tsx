import { useState } from 'react';
import axios from 'axios';

export default function TextSummarizer() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    const res = await axios.post('http://localhost:8000/summarize', { text: input });
    setSummary(res.data.summary);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Smart Text Summarizer</h2>
      <textarea
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-2 mb-4"
        placeholder="Paste your text here..."
      />
      <button onClick={handleSummarize} className="bg-blue-500 text-white px-4 py-2 rounded">
        Summarize
      </button>
      {summary && (
        <div className="mt-4 p-4 border bg-gray-100">
          <h3 className="font-semibold">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
