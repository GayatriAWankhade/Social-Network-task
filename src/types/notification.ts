export type NotificationType = 'follow_request' | 'like' | 'comment' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  read: boolean;
  createdAt: string;
  relatedUserId?: string;  
}
