// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { clsx } from 'clsx';
// import {
//   HomeIcon,
//   UserIcon,
//   ChatBubbleLeftRightIcon,
//   MagnifyingGlassIcon,
//   BellIcon,
// } from '@heroicons/react/24/outline';
// import {
//   HomeIcon as HomeIconSolid,
//   UserIcon as UserIconSolid,
//   ChatBubbleLeftRightIcon as ChatIconSolid,
//   MagnifyingGlassIcon as SearchIconSolid,
//   BellIcon as BellIconSolid,
// } from '@heroicons/react/24/solid';

// const navigation = [
//   { name: 'Feed', href: '/feed', icon: HomeIcon, iconSolid: HomeIconSolid },
//   { name: 'Profile', href: '/profile/me', icon: UserIcon, iconSolid: UserIconSolid },
//   { name: 'Messages', href: '/messages', icon: ChatBubbleLeftRightIcon, iconSolid: ChatIconSolid },
//   { name: 'Search', href: '/search', icon: MagnifyingGlassIcon, iconSolid: SearchIconSolid },
//   { name: 'Notifications', href: '/notifications', icon: BellIcon, iconSolid: BellIconSolid },
// ];

// export const Sidebar: React.FC = () => {
//   const location = useLocation();

//   return (
//     <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
//       <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
//         <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
//           <nav className="mt-5 flex-1 px-2 space-y-1">
//             {navigation.map((item) => {
//               const isActive = location.pathname === item.href;
//               const Icon = isActive ? item.iconSolid : item.icon;
              
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={clsx(
//                     'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
//                     isActive
//                       ? 'bg-blue-100 text-blue-900'
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   )}
//                 >
//                   <Icon
//                     className={clsx(
//                       'mr-3 flex-shrink-0 h-6 w-6',
//                       isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
//                     )}
//                   />
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

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
