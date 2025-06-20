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
    <li className="flex items-center justify-between p-2 border rounded hover:bg-gray-100">
      <Link to={`/profile/${user.id}`} className="flex items-center space-x-3">
        <img
          src={user.avatarUrl || '/default-avatar.png'}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-600">@{user.username}</p>
        </div>
      </Link>
      <button
        onClick={handleFollowToggle}
        disabled={loading}
        className={`px-3 py-1 rounded ${
          isFollowing ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'
        } hover:opacity-80`}
      >
        {loading ? '...' : isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </li>
  );
};

export default UserSearchItem;
