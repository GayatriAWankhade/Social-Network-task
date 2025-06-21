import client from './client';

export const fetchUserProfile = async (userId: string) => {
  const res = await client.get(`/users/${userId}`);
  return res.data;
};

export const fetchUserPosts = async (userId: string) => {
  const res = await client.get(`/users/${userId}/posts`);
  return res.data;
};

export const fetchFollowers = async (userId: string) => {
  const res = await client.get(`/users/${userId}/followers`);
  return res.data;
};

export const fetchFollowing = async (userId: string) => {
  const res = await client.get(`/users/${userId}/following`);
  return res.data;
};

export const updateUserProfile = async (userId: string, data: any) => {
  const res = await client.put(`/users/${userId}`, data);
  return res.data;
};

export const searchUsersAPI = async (query: string) => {
  const res = await client.get(`/users/search?query=${query}`);
  return res.data;
};

// Example implementation
export const followUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}/follow`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to follow user');
  return response.json();
};

export const unfollowUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}/unfollow`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to unfollow user');
  return response.json();
};
