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
    <div className="post-interactions flex space-x-6 mt-2 text-gray-600">
      <button onClick={handleLike} className="hover:text-blue-600">
        👍 {post.likesCount}
      </button>
      <button onClick={onToggleComments} className="hover:text-blue-600">
        💬 {post.commentsCount}
      </button>
      <button onClick={handleShare} className="hover:text-blue-600">
        🔄 Share
      </button>
    </div>
  );
};

export default PostInteractions;
