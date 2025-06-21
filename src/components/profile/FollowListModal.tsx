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

const FollowListModal: React.FC<FollowListModalProps> = ({ isOpen, userId, type, onClose }) => {
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={type === 'followers' ? 'Followers' : 'Following'}>
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && <p>No users found.</p>}
      <div className="space-y-2 max-h-96 overflow-auto">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Modal>
  );
};

export default FollowListModal;
