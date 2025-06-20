import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { fetchPosts } from '../lib/api/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
};
