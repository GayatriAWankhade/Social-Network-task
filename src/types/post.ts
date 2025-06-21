import { User } from './user'; 
export interface Post {
  id: string;
  author: User;
  content: string;
  mediaUrl?: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
}
