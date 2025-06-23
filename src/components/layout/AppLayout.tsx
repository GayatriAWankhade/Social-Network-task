import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout flex h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 antialiased">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar />
        <main className="flex-1 overflow-auto p-6 bg-white/60 backdrop-blur-sm border-l border-slate-200/50 shadow-inner">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/5 border border-white/20 p-6 min-h-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;