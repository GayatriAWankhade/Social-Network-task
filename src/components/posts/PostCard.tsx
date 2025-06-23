import React, { useState } from 'react';
import { Post } from '../../types/post';
import PostInteractions from './PostInteractions';
import CommentSection from './CommentSection';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post-card bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center space-x-4">
          {/* Author Avatar */}
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
            {post.author.name.charAt(0).toUpperCase()}
          </div>
          
          {/* Author Info */}
          <div className="flex-1">
            <div className="post-header font-semibold text-gray-900 text-lg hover:text-blue-600 cursor-pointer transition-colors duration-200">
              {post.author.name}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>2 hours ago</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Public</span>
              </div>
            </div>
          </div>
          
          {/* Post Options */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <div className="post-content text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>

      {/* Post Media */}
      {post.mediaUrl && (
        <div className="relative overflow-hidden bg-gray-50">
          <img 
            src={post.mediaUrl} 
            alt="Post media" 
            className="w-full h-auto object-cover max-h-96 hover:scale-105 transition-transform duration-300 cursor-pointer" 
          />
          {/* Media Overlay for better UX */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"></div>
        </div>
      )}

      {/* Post Stats */}
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span>42 reactions</span>
            </div>
            <span>8 comments</span>
            <span>3 shares</span>
          </div>
          <div className="text-gray-500">
            <span>Trending</span>
          </div>
        </div>
      </div>

      {/* Post Interactions */}
      <div className="border-t border-gray-100">
        <PostInteractions 
          post={post} 
          onToggleComments={() => setShowComments(!showComments)} 
        />
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="p-6">
            <CommentSection postId={post.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;