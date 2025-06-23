import React from 'react';
import { Post } from '../../types/post';

interface PostInteractionsProps {
  post: Post;
  onToggleComments: () => void;
}

const PostInteractions: React.FC<PostInteractionsProps> = ({ post, onToggleComments }) => {
  // Placeholder handlers
  const handleLike = () => {
    // Implement like logic here
    alert('Like clicked!');
  };

  const handleShare = () => {
    // Implement share logic here
    alert('Share clicked!');
  };

  return (
    <div className="post-interactions bg-white border-t border-gray-100">
      {/* Main Interaction Buttons */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex space-x-1 w-full">
          {/* Like Button */}
          <button 
            onClick={handleLike} 
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-600 hover:text-blue-600 font-medium group"
          >
            <div className="relative">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2v0a2 2 0 00-2 2v6.5H4a2 2 0 00-2 2v7a2 2 0 002 2h1M7 20l4-2v0a2 2 0 012-2h2.5" />
              </svg>
              {/* Animated heart for like effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200"></div>
            </div>
            <span className="text-sm">Like</span>
            {post.likesCount > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center">
                {post.likesCount}
              </span>
            )}
          </button>

          {/* Comment Button */}
          <button 
            onClick={onToggleComments} 
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-600 hover:text-green-600 font-medium group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm">Comment</span>
            {post.commentsCount > 0 && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center">
                {post.commentsCount}
              </span>
            )}
          </button>

          {/* Share Button */}
          <button 
            onClick={handleShare} 
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-600 hover:text-purple-600 font-medium group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            {/* Quick Like Reactions */}
            <div className="flex items-center space-x-1">
              <button className="hover:scale-125 transition-transform duration-200 text-lg">👍</button>
              <button className="hover:scale-125 transition-transform duration-200 text-lg">❤️</button>
              <button className="hover:scale-125 transition-transform duration-200 text-lg">😂</button>
              <button className="hover:scale-125 transition-transform duration-200 text-lg">😮</button>
              <button className="hover:scale-125 transition-transform duration-200 text-lg">😢</button>
              <button className="hover:scale-125 transition-transform duration-200 text-lg">😡</button>
            </div>
          </div>
          
          {/* Engagement Summary */}
          <div className="flex items-center space-x-3 text-gray-400">
            {post.likesCount > 0 && (
              <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                {post.likesCount} {post.likesCount === 1 ? 'person likes' : 'people like'} this
              </span>
            )}
            {post.commentsCount > 0 && (
              <span className="hover:text-green-600 cursor-pointer transition-colors duration-200">
                {post.commentsCount} {post.commentsCount === 1 ? 'comment' : 'comments'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInteractions;