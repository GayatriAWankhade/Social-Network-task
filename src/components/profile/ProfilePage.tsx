import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import { EditProfileModal } from './EditProfileModal';
import UserCard from './UserCard';
import FollowListModal from './FollowListModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../types/user';

const ProfilePage: React.FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.user) as User | null;

  const [user, setUser] = useState<User | null>(authUser);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [followModalOpen, setFollowModalOpen] = useState(false);
  const [followType, setFollowType] = useState<'followers' | 'following'>('followers');

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProfileHeader
        user={user}
        onEdit={() => setEditModalOpen(true)}
        onShowFollowers={() => {
          setFollowType('followers');
          setFollowModalOpen(true);
        }}
        onShowFollowing={() => {
          setFollowType('following');
          setFollowModalOpen(true);
        }}
      />

      <UserCard user={user} />

      <FollowListModal
  isOpen={followModalOpen}
  onClose={() => setFollowModalOpen(false)}
  type={followType}
  userId={user.id}
/>

      <EditProfileModal
        isOpen={editModalOpen}
        user={user}
        onClose={() => setEditModalOpen(false)}
        onSave={(updatedUser: User) => {
          setUser(updatedUser);
          setEditModalOpen(false);
        }}
      />
    </div>
  );
};

export default ProfilePage;
