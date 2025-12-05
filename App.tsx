import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LessonView from './components/LessonView';
import { lessons, unitOverviewData, philosophyData, editingGuideContent } from './content/index';

// Simple components for Overview and Philosophy since they are static
const Overview = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">{unitOverviewData.title}</h1>
        <p className="text-blue-100 text-lg">{unitOverviewData.description}</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-500 text-xs uppercase mb-2">Target Audience</h3>
            <p className="text-slate-800 font-medium">{unitOverviewData.gradeLevel}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-500 text-xs uppercase mb-2">Format</h3>
            <p className="text-slate-800 font-medium">{unitOverviewData.mode}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-500 text-xs uppercase mb-2">Theme</h3>
            <p className="text-slate-800 font-medium">{unitOverviewData.theme}</p>
        </div>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Learner Diversity & Inclusion</h2>
        <p className="text-slate-600 leading-relaxed">{unitOverviewData.diversityFocus}</p>
    </div>

    <div className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Unit Roadmap</h2>
        <div className="grid gap-4">
            {lessons.map((l) => (
                <div key={l.id} className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between hover:border-blue-300 transition group">
                    <div>
                        <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">{l.unitSection}</span>
                        <h3 className="font-bold text-slate-800">{l.sequenceNumber}. {l.title}</h3>
                        <p className="text-sm text-slate-500">By {l.author}</p>
                    </div>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded group-hover:bg-blue-100 group-hover:text-blue-700 transition">
                        {l.duration}
                    </span>
                </div>
            ))}
        </div>
    </div>
  </div>
);

const Philosophy = () => (
  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-slate-900 mb-2">{philosophyData.title}</h1>
    <p className="text-slate-500 mb-8 italic">By {philosophyData.authors.join(', ')}</p>
    
    <div className="prose prose-slate prose-lg">
      <div dangerouslySetInnerHTML={{ 
        __html: philosophyData.content
          .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">$1</h3>')
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700">$1</strong>')
          .replace(/\* (.*)/g, '<li class="list-disc ml-5 mb-2">$1</li>')
          .replace(/\n/g, '<br />')
      }} />
    </div>
  </div>
);

const Guide = () => (
  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
    <div className="prose prose-slate prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: editingGuideContent
          .replace(/# (.*)/g, '<h1 class="text-3xl font-extrabold text-slate-900 mb-6">$1</h1>')
          .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-slate-800 mt-8 mb-4 border-b pb-2">$1</h2>')
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
          .replace(/\* (.*)/g, '<li class="list-disc ml-5 mb-1">$1</li>')
          .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-red-500 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
          .replace(/```typescript([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm">$1</pre>')
          .replace(/\n/g, '<br />')
      }} />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/guide" element={<Guide />} />
          {lessons.map(lesson => (
            <Route 
              key={lesson.id} 
              path={`/lessons/${lesson.id}`} 
              element={<LessonView lesson={lesson} />} 
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
