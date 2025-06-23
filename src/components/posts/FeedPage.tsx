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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Feed</h1>
              <p className="text-sm text-gray-600 mt-1">Stay connected with your community</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-500">
                {!loading && posts.length > 0 && `${posts.length} posts`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="feed-page max-w-3xl mx-auto p-4 space-y-6">
        {/* Create Post Button */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="flex-1">
              <button
                onClick={() => setCreateModalOpen(true)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                What's on your mind? Share something with your community...
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Video</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4h10m-10 0V6a1 1 0 011-1h8a1 1 0 011 1v2m-10 0v10a1 1 0 001 1h8a1 1 0 001 1V8" />
                </svg>
                <span className="text-sm">Poll</span>
              </button>
            </div>
            <button
              onClick={() => setCreateModalOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Create Post
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate-pulse">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-32 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6">Be the first to share something with your community! Your thoughts and experiences matter.</p>
              <button
                onClick={() => setCreateModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Create Your First Post</span>
              </button>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="transform transition-all duration-300 hover:scale-[1.02] opacity-0 animate-pulse"
              style={{ 
                animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards`,
                animationFillMode: 'forwards'
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Load More Button (if needed) */}
        {!loading && posts.length > 0 && (
          <div className="text-center py-8">
            <button className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-medium hover:border-blue-300 hover:text-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Load More Posts
            </button>
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {createModalOpen && (
        <CreatePostModal
          onClose={() => setCreateModalOpen(false)}
          onPostCreated={addNewPost}
        />
      )}

      {/* Add this CSS to your global styles or CSS file */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FeedPage;