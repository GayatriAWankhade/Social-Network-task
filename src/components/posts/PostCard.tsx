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
    <div className="post-card border rounded p-4 mb-4 bg-white shadow-sm">
      <div className="post-header mb-2 font-semibold">{post.author.name}</div>
      <div className="post-content mb-2">{post.content}</div>
      {post.mediaUrl && (
        <img src={post.mediaUrl} alt="Post media" className="max-w-full rounded mb-2" />
      )}
      <PostInteractions post={post} onToggleComments={() => setShowComments(!showComments)} />
      {showComments && <CommentSection postId={post.id} />}
    </div>
  );
};

export default PostCard;
