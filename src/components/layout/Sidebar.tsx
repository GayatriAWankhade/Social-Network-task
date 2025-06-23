import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar w-64 bg-white/90 backdrop-blur-lg border-r border-slate-200/50 p-6 flex flex-col space-y-2 shadow-lg shadow-blue-500/5">
      <NavLink
        to="/feed"
        className={({ isActive }) =>
          isActive 
            ? 'font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 transform scale-105 flex items-center gap-3 transition-all duration-300' 
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 flex items-center gap-3 group'
        }
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        Feed
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive 
            ? 'font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 transform scale-105 flex items-center gap-3 transition-all duration-300' 
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 flex items-center gap-3 group'
        }
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Profile
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          isActive 
            ? 'font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 transform scale-105 flex items-center gap-3 transition-all duration-300' 
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 flex items-center gap-3 group'
        }
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Messages
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive 
            ? 'font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 transform scale-105 flex items-center gap-3 transition-all duration-300' 
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 flex items-center gap-3 group'
        }
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 10V9a2 2 0 00-2-2m0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0h10" />
        </svg>
        Notifications
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive 
            ? 'font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 transform scale-105 flex items-center gap-3 transition-all duration-300' 
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 flex items-center gap-3 group'
        }
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </NavLink>
    </aside>
  );
};

export default Sidebar;