import React, { useEffect, useState } from 'react';
import { Modal } from '../ui/Modal';
import { User } from '../../types/user';
import UserCard from './UserCard';
import { fetchFollowers, fetchFollowing } from '../../lib/api/users';

interface FollowListModalProps {
  isOpen: boolean; 
  userId: string;
  type: 'followers' | 'following';
  onClose: () => void;
}

const FollowListModal: React.FC<FollowListModalProps> = ({ 
  isOpen, 
  userId, 
  type, 
  onClose 
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return; // Only fetch if modal is open

    setLoading(true);
    const fetchUsers = type === 'followers' ? fetchFollowers : fetchFollowing;
    fetchUsers(userId)
      .then(setUsers)
      .finally(() => setLoading(false));
  }, [userId, type, isOpen]);

  if (!isOpen) return null; 

  const title = type === 'followers' ? 'Followers' : 'Following';
  const emptyMessage = type === 'followers' 
    ? 'No followers yet' 
    : 'Not following anyone yet';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="p-6">
        {/* Header with count */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 capitalize">
              {title}
            </h3>
            {!loading && (
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {users.length} {users.length === 1 ? 'user' : 'users'}
              </span>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 text-sm">Loading users...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <p className="text-gray-600 text-center font-medium">{emptyMessage}</p>
            <p className="text-gray-400 text-sm text-center mt-1">
              {type === 'followers' 
                ? 'Share your profile to gain followers' 
                : 'Discover and follow interesting people'
              }
            </p>
          </div>
        )}

        {/* Users List */}
        {!loading && users.length > 0 && (
          <div 
            className="space-y-3 max-h-96 overflow-y-auto pr-2 -mr-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9'
            }}
          >
            <div className="space-y-2">
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="transition-all duration-200 hover:bg-gray-50 rounded-lg p-2 -m-2"
                >
                  <UserCard user={user} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default FollowListModal;