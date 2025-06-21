import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import CreatePostModal from './CreatePostModal';
import { Post } from '../../types/post';
import { fetchPosts } from '../../lib/api/posts';

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const addNewPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="feed-page max-w-3xl mx-auto p-4">
      <button
        onClick={() => setCreateModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Post
      </button>

      {loading && <p>Loading posts...</p>}
      {!loading && posts.length === 0 && <p>No posts yet.</p>}

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

      {createModalOpen && (
        <CreatePostModal
          onClose={() => setCreateModalOpen(false)}
          onPostCreated={addNewPost}
        />
      )}
    </div>
  );
};

export default FeedPage;
