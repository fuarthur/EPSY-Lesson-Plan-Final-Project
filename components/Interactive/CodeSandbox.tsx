import React, { useState } from 'react';

interface Props {
  initialCode: string;
}

const CodeSandbox: React.FC<Props> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm mt-4">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
        <span className="text-sm font-mono text-slate-600">Pseudocode Editor</span>
        <button 
          onClick={() => setCode(initialCode)}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Reset
        </button>
      </div>
      <textarea
        className="w-full h-48 p-4 font-mono text-sm bg-slate-800 text-green-400 focus:outline-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
      />
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200">
        <p className="text-xs text-slate-500 italic">
          Try modifying the steps above. How does it change the outcome?
        </p>
      </div>
    </div>
  );
};

export default CodeSandbox;