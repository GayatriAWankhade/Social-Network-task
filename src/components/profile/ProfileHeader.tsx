import React from 'react';
import { User } from '../../types/user';

interface ProfileHeaderProps {
  user: User;
  onEdit: () => void;
  onShowFollowers: () => void;
  onShowFollowing: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ 
  user, 
  onEdit, 
  onShowFollowers, 
  onShowFollowing 
}) => {
  return (
    <header className="profile-header flex items-center space-x-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Avatar Section */}
      <div className="relative">
        <img
          src={user.avatarUrl || '/default-avatar.png'}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-md"
        />
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-sm"></div>
      </div>

      {/* Profile Info Section */}
      <div className="flex-1">
        {/* Name and Bio */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            {user.bio || (
              <span className="italic text-gray-400">No bio available</span>
            )}
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center space-x-6">
          {/* Stats */}
          <div className="flex space-x-6">
            <button
              onClick={onShowFollowers}
              className="group flex flex-col items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {user.followersCount?.toLocaleString() || 0}
              </span>
              <span className="text-sm text-gray-600 font-medium">Followers</span>
            </button>

            <button
              onClick={onShowFollowing}
              className="group flex flex-col items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {user.followingCount?.toLocaleString() || 0}
              </span>
              <span className="text-sm text-gray-600 font-medium">Following</span>
            </button>
          </div>

          {/* Divider */}
          <div className="h-12 w-px bg-gray-200"></div>

          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;