export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  isFollowing?: boolean;
  followersCount?: number;
  followingCount?: number;
}
