import React from 'react';
import { User } from '../../types/user';

interface ProfileHeaderProps {
  user: User;
  onEdit: () => void;
  onShowFollowers: () => void;
  onShowFollowing: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onEdit, onShowFollowers, onShowFollowing }) => {
  return (
    <header className="profile-header flex items-center space-x-6 p-4 bg-white rounded shadow">
      <img
        src={user.avatarUrl || '/default-avatar.png'}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.bio || 'No bio available'}</p>
        <div className="mt-2 flex space-x-4">
          <button
            onClick={onEdit}
            className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Edit Profile
          </button>
          <button
            onClick={onShowFollowers}
            className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Followers: {user.followersCount}
          </button>
          <button
            onClick={onShowFollowing}
            className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Following: {user.followingCount}
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
