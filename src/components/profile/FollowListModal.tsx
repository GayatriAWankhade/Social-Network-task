import React, { useEffect, useState } from 'react';
import { Modal } from '../ui/Modal';
import { User } from '../../types/user';
import UserCard from './UserCard';
import { fetchFollowers, fetchFollowing } from '../../lib/api/users'; // assumed APIs

interface FollowListModalProps {
  userId: string;
  type: 'followers' | 'following';
  onClose: () => void;
}

const FollowListModal: React.FC<FollowListModalProps> = ({ userId, type, onClose }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = type === 'followers' ? fetchFollowers : fetchFollowing;
    fetchUsers(userId)
      .then(setUsers)
      .finally(() => setLoading(false));
  }, [userId, type]);

  return (
    <Modal onClose={onClose} title={type === 'followers' ? 'Followers' : 'Following'}>
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
