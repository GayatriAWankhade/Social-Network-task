// import client from './client';

// export const searchUsers = async (query: string) => {
//   const response = await client.get(`/users/search?q=${encodeURIComponent(query)}`);
//   return response.data;
// };

// export const followUser = async (userId: string) => {
//   const response = await client.post(`/users/${userId}/follow`);
//   return response.data;
// };

// export const unfollowUser = async (userId: string) => {
//   const response = await client.post(`/users/${userId}/unfollow`);
//   return response.data;
// };

// export const fetchUserProfile = async (userId: string) => {
//   const res = await client.get(`/users/${userId}`);
//   return res.data;
// };

// export const fetchUserPosts = async (userId: string) => {
//   const res = await client.get(`/users/${userId}/posts`);
//   return res.data;
// };

// export const fetchFollowers = async (userId: string) => {
//   const res = await client.get(`/users/${userId}/followers`);
//   return res.data;
// };

// export const fetchFollowing = async (userId: string) => {
//   const res = await client.get(`/users/${userId}/following`);
//   return res.data;
// };

// export const updateUserProfile = async (userId: string, data: any) => {
//   const res = await client.put(`/users/${userId}`, data);
//   return res.data;
// };


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
