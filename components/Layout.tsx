import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { lessons } from '../content/index';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold text-white tracking-tight">EduLogic</h1>
          <p className="text-xs text-slate-500 mt-1">CS + Math Integration</p>
        </div>
        <nav className="p-4 space-y-1">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
              location.pathname === '/' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            Unit Overview
          </Link>
          <Link 
            to="/philosophy" 
            className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
              location.pathname === '/philosophy' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            Teaching Philosophy
          </Link>
          
          <div className="pt-4 pb-1 pl-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Lesson Plans
          </div>
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lessons/${lesson.id}`}
              className={`block px-3 py-2 rounded-md text-sm transition ${
                location.pathname === `/lessons/${lesson.id}` 
                  ? 'bg-slate-800 text-white border-l-4 border-blue-500' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="opacity-70 mr-2">{lesson.sequenceNumber}.</span>
              {lesson.title}
            </Link>
          ))}

          <div className="pt-6 pb-1 pl-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Admin
          </div>
          <Link 
            to="/guide" 
            className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
              location.pathname === '/guide' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'
            }`}
          >
            Content Editing Guide
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-slate-50 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 md:p-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
