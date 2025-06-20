import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import EditProfileModal from './EditProfileModal';
import UserCard from './UserCard';
import FollowListModal from './FollowListModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchUserProfile, fetchUserPosts } from '../../lib/api/users'; // assumed API calls
import { User } from '../../types/user';
import { Post } from '../../types/post';

const ProfilePage: React.FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [followersModalOpen, setFollowersModalOpen] = useState(false);
  const [followingModalOpen, setFollowingModalOpen] = useState(false);

  useEffect(() => {
    if (authUser) {
      fetchUserProfile(authUser.id).then(setUser);
      fetchUserPosts(authUser.id).then(setPosts);
    }
  }, [authUser]);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className="profile-page max-w-4xl mx-auto p-4">
      <ProfileHeader
        user={user}
        onEdit={() => setEditModalOpen(true)}
        onShowFollowers={() => setFollowersModalOpen(true)}
        onShowFollowing={() => setFollowingModalOpen(true)}
      />
      <section className="posts mt-6">
        <h3 className="text-xl font-semibold mb-4">Posts</h3>
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map(post => (
          <div key={post.id} className="mb-4 p-4 border rounded shadow-sm">
            <p>{post.content}</p>
            {/* You can expand with comments, likes, etc. */}
          </div>
        ))}
      </section>

      {editModalOpen && (
        <EditProfileModal
          user={user}
          onClose={() => setEditModalOpen(false)}
          onSave={(updatedUser) => {
            setUser(updatedUser);
            setEditModalOpen(false);
          }}
        />
      )}

      {followersModalOpen && (
        <FollowListModal userId={user.id} type="followers" onClose={() => setFollowersModalOpen(false)} />
      )}

      {followingModalOpen && (
        <FollowListModal userId={user.id} type="following" onClose={() => setFollowingModalOpen(false)} />
      )}
    </div>
  );
};

export default ProfilePage;
