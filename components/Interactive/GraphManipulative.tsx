import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

interface Props {
  type: string;
}

const GraphManipulative: React.FC<Props> = ({ type }) => {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);

  // Generate data based on state
  const data = Array.from({ length: 10 }, (_, i) => ({
    x: i,
    y: slope * i + intercept,
    yScatter: i + Math.random() * 5 // For scatter mode
  }));

  return (
    <div className="border border-slate-300 rounded-lg p-4 bg-white shadow-sm mt-4">
      <h3 className="text-sm font-bold text-slate-700 mb-2">Interactive Visualizer</h3>
      
      {/* Controls */}
      <div className="flex gap-4 mb-4 text-sm">
        <div className="flex flex-col">
          <label className="text-slate-500">Slope (m): {slope}</label>
          <input 
            type="range" min="0" max="5" step="0.5" 
            value={slope} 
            onChange={(e) => setSlope(parseFloat(e.target.value))} 
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500">Intercept (b): {intercept}</label>
          <input 
            type="range" min="-5" max="5" step="1" 
            value={intercept} 
            onChange={(e) => setIntercept(parseFloat(e.target.value))} 
          />
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'scatter' ? (
             <ScatterChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
             <CartesianGrid />
             <XAxis type="number" dataKey="x" name="time" />
             <YAxis type="number" dataKey="yScatter" name="value" />
             <Tooltip cursor={{ strokeDasharray: '3 3' }} />
             <Scatter name="Data" data={data} fill="#8884d8" />
           </ScatterChart>
          ) : (
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-center text-slate-500 mt-2">
        Equation: y = {slope}x {intercept >= 0 ? '+' : ''} {intercept}
      </p>
    </div>
  );
};

export default GraphManipulative;