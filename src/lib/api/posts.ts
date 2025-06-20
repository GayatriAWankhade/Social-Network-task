import client from './client';
import { Post } from '../../types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await client.get('/posts');
  return response.data;
};

export const createPost = async (content: string, mediaUrl?: string) => {
  const response = await client.post('/posts', { content, mediaUrl });
  return response.data;
};

export const fetchComments = async (postId: string) => {
  const res = await client.get(`/posts/${postId}/comments`);
  return res.data;
};

export const createComment = async (postId: string, content: string) => {
  const res = await client.post(`/posts/${postId}/comments`, { content });
  return res.data;
};