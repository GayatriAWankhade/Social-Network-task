export interface User {
  id: string;
  firebaseUid: string;
  email: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
}

export interface Follow {
  id: string;
  follower: User;
  following: User;
  createdAt: string;
}

export interface FollowRequest {
  id: string;
  fromUid: string;
  toUid: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: string;
  fromUser?: User;
  toUser?: User;
}