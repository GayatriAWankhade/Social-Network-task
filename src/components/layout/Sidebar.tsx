import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar w-64 bg-white border-r p-4 flex flex-col space-y-4">
      <NavLink
        to="/feed"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }
      >
        Feed
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }
      >
        Messages
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }
      >
        Notifications
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }
      >
        Settings
      </NavLink>
    </aside>
  );
};

export default Sidebar;
