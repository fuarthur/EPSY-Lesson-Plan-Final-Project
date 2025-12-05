import React, { useState } from 'react';
import { FormativeCheck } from '../../types';

interface Props {
  data: FormativeCheck;
}

const Quiz: React.FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleCheck = () => {
    if (!selected) return;
    if (data.type === 'reflection') {
        setFeedback("Response recorded. Good reflection!");
        return;
    }
    if (selected === data.correctAnswer) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Try again. Think about the definition.");
    }
  };

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
      <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
        <span>⚡</span> Quick Check
      </h4>
      <p className="mb-3 text-slate-800">{data.question}</p>
      
      {data.type === 'multiple-choice' && data.options && (
        <div className="space-y-2">
          {data.options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="quiz" 
                value={opt}
                onChange={() => { setSelected(opt); setFeedback(null); }}
                className="text-orange-600 focus:ring-orange-500"
              />
              <span className="text-slate-700">{opt}</span>
            </label>
          ))}
        </div>
      )}

      {data.type === 'reflection' && (
          <textarea 
            className="w-full p-2 border border-orange-200 rounded" 
            placeholder="Type your thoughts here..."
            onChange={(e) => setSelected(e.target.value)}
          />
      )}

      <div className="mt-4 flex items-center gap-4">
        <button 
          onClick={handleCheck}
          className="bg-orange-600 text-white px-4 py-1 rounded text-sm hover:bg-orange-700 transition"
        >
          Check Answer
        </button>
        {feedback && (
          <span className={`text-sm font-bold ${feedback.includes('Correct') ? 'text-green-600' : 'text-orange-600'}`}>
            {feedback}
          </span>
        )}
      </div>
    </div>
  );
};

export default Quiz;