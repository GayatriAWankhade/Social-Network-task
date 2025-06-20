import React from 'react';
import { User } from '../../types/user';
import { Link } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`/profile/${user.id}`} className="user-card flex items-center space-x-4 p-2 hover:bg-gray-100 rounded">
      <img
        src={user.avatarUrl || '/default-avatar.png'}
        alt={user.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">@{user.username}</p>
      </div>
    </Link>
  );
};

export default UserCard;
