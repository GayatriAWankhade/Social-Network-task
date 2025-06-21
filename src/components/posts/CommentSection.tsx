import React, { useEffect, useState } from 'react';
import { fetchComments, createComment } from '../../lib/api/posts';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';


type Comment = {
  id: string;
  author: { name: string }; // adapt to your API type
  content: string;
};

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetchComments(postId)
      .then(setComments)
      .finally(() => setLoading(false));
  }, [postId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    setPosting(true);
    try {
      const comment = await createComment(postId, newComment);
      setComments((prev) => [...prev, comment]);
      setNewComment('');
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="comment-section mt-4 border-t pt-2">
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <>
          {comments.length === 0 && <p>No comments yet.</p>}
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="mb-2">
                <strong>{comment.author.name}: </strong>
                {comment.content}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mt-2">
            <Input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <Button onClick={handleAddComment} disabled={posting}>
              {posting ? 'Posting...' : 'Comment'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentSection;
