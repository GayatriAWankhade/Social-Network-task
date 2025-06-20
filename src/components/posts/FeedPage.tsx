import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlusIcon } from '@heroicons/react/24/outline';
import { RootState } from '../../store';
import { Button } from '../ui/Button';
import { Loading } from '../ui/Loading';
import { PostCard } from './PostCard';
import { CreatePostModal } from './CreatePostModal';

export const FeedPage: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Simulate loading posts
    setTimeout(() => {
      setPosts([
        {
          id: '1',
          author: {
            id: '1',
            name: 'John Doe',
            avatarUrl: '',
            firebaseUid: 'user1'
          },
          content: 'Just had an amazing day exploring the city! The weather was perfect and I discovered some great new places.',
          mediaUrl: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          likesCount: 12,
          commentsCount: 3,
          isLiked: false,
        },
        {
          id: '2',
          author: {
            id: '2',
            name: 'Jane Smith',
            avatarUrl: '',
            firebaseUid: 'user2'
          },
          content: 'Working on a new project that I\'m really excited about. Can\'t wait to share more details soon!',
          mediaUrl: '',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          likesCount: 8,
          commentsCount: 1,
          isLiked: true,
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <Loading size="lg" text="Loading posts..." />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Create Post Button */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="w-full text-left px-4 py-3 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              What's on your mind, {user?.name}?
            </button>
          </div>
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            variant="primary"
            size="sm"
            className="flex items-center space-x-2"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Post</span>
          </Button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500 mb-4">Be the first to share something!</p>
            <Button onClick={() => setIsCreateModalOpen(true)} variant="primary">
              Create your first post
            </Button>
          </div>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};