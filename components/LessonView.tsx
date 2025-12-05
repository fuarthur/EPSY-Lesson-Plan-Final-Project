import React from 'react';
import { Lesson } from '../types';
import CodeSandbox from './Interactive/CodeSandbox';
import GraphManipulative from './Interactive/GraphManipulative';
import Quiz from './Interactive/Quiz';

interface Props {
  lesson: Lesson;
}

const LessonView: React.FC<Props> = ({ lesson }) => {
  
  const handleDownload = () => {
    const content = `
LESSON PLAN: ${lesson.title}
Author: ${lesson.author}
Duration: ${lesson.duration}

OBJECTIVES:
${lesson.objectives.map(o => `- ${o}`).join('\n')}

MATERIALS:
${lesson.materials.map(m => `- ${m.name}`).join('\n')}

INSTRUCTIONAL STEPS:
${lesson.steps.map((step, i) => `
${i + 1}. ${step.title} (${step.duration})
   Script: ${step.instructorScript}
   Activity: ${step.studentActivity}
`).join('\n')}

EDUCATIONAL PSYCHOLOGY APPENDIX:
${lesson.edPsychNotes.map(n => `- ${n.concept}: ${n.explanation} ${n.chapterRef}`).join('\n')}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lesson.id}_plan.txt`;
    a.click();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex justify-between items-start">
            <div>
                <span className="text-blue-600 font-bold tracking-wide text-xs uppercase mb-1 block">
                {lesson.unitSection}
                </span>
                <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
                <p className="text-slate-500 mt-2">Author: {lesson.author} • Duration: {lesson.duration}</p>
            </div>
            <button 
                onClick={handleDownload}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Plan
            </button>
        </div>
      </div>

      {/* Objectives & Materials Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <span className="text-blue-500 mt-1">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Materials</h2>
          <ul className="space-y-2">
            {lesson.materials.map((mat, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <span className="text-slate-400">□</span>
                {mat.type === 'link' ? (
                  <a href={mat.url} className="text-blue-600 underline hover:text-blue-800">{mat.name}</a>
                ) : (
                  <span>{mat.name} <span className="text-xs text-slate-400 uppercase ml-1">({mat.type})</span></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Steps */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Instructor Guide</h2>
        <div className="space-y-6">
          {lesson.steps.map((step, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-slate-800">
                  <span className="text-slate-300 mr-3">0{index + 1}</span>
                  {step.title}
                </h3>
                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {step.duration}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Instructor Script</h4>
                  <p className="text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded border border-slate-100">
                    "{step.instructorScript}"
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Student Activity</h4>
                  <p className="text-slate-700">{step.studentActivity}</p>
                </div>
              </div>

              {/* Rationale / Ed Psych Callout */}
              {step.rationale && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <details className="group/details">
                        <summary className="cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center text-[10px]">?</span>
                            Pedagogical Reasoning
                        </summary>
                        <p className="mt-2 text-sm text-slate-600 pl-6 animate-fade-in" dangerouslySetInnerHTML={{ __html: step.rationale.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
                    </details>
                </div>
              )}

              {/* Interactive Components */}
              {step.interactiveComponent === 'sandbox' && step.interactiveData && (
                <CodeSandbox initialCode={step.interactiveData.placeholder} />
              )}
              {step.interactiveComponent === 'graph' && (
                <GraphManipulative type={step.interactiveData.type} />
              )}
              {step.interactiveComponent === 'quiz' && (
                 <Quiz data={step.interactiveData} />
              )}
            </div>
          ))}
        </div>
      </div>

       {/* Formative Assessment Section */}
       {lesson.formativeAssessment && lesson.formativeAssessment.length > 0 && (
         <div className="mt-12 bg-indigo-50 p-8 rounded-xl border border-indigo-100">
             <h2 className="text-xl font-bold text-indigo-900 mb-4">Check for Understanding</h2>
             {lesson.formativeAssessment.map((check, i) => (
                 <Quiz key={i} data={check} />
             ))}
         </div>
       )}

      {/* Appendix */}
      <div className="mt-12 bg-slate-800 text-slate-300 p-8 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Appendix: Educational Psychology Integration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {lesson.edPsychNotes.map((note, i) => (
            <div key={i}>
              <h4 className="font-bold text-blue-400 mb-1">{note.concept}</h4>
              <p className="text-sm text-slate-400 mb-1">{note.explanation}</p>
              <span className="text-xs text-slate-500">{note.chapterRef}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonView;