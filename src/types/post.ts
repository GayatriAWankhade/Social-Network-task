export interface Post {
  id: string;
  author: User;
  content: string;
  mediaUrl?: string;
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  post: string;
  author: User;
  content: string;
  createdAt: string;
}

export interface Like {
  id: string;
  post: string;
  user: User;
  createdAt: string;
}