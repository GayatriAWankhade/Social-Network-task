import React, { useState } from 'react';
import { User } from '../../types/user';
import { Link } from 'react-router-dom';
import { followUser, unfollowUser } from '../../lib/api/users';

interface UserSearchItemProps {
  user: User;
}

const UserSearchItem: React.FC<UserSearchItemProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing || false);
  const [loading, setLoading] = useState(false);

  const handleFollowToggle = async () => {
    setLoading(true);
    try {
      if (isFollowing) {
        await unfollowUser(user.id);
        setIsFollowing(false);
      } else {
        await followUser(user.id);
        setIsFollowing(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
      <Link to={`/profile/${user.id}`} className="flex items-center space-x-4 flex-1 min-w-0 group-hover:scale-[1.02] transition-transform duration-200">
        <div className="relative">
          <img
            src={user.avatarUrl || '/default-avatar.png'}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200/50 group-hover:ring-blue-400/50 transition-all duration-300 shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 truncate">
            {user.name}
          </p>
          <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
            @{user.username}
          </p>
        </div>
      </Link>
      <button
        onClick={handleFollowToggle}
        disabled={loading}
        className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 shadow-md min-w-[80px] ${
          isFollowing 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/25 hover:shadow-red-500/40 focus:ring-red-500/20' 
            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-500/20'
        } ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          isFollowing ? 'Unfollow' : 'Follow'
        )}
      </button>
    </li>
  );
};

export default UserSearchItem;