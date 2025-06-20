import client from './client';
import { Notification } from '../../types/notification';
import { fetchNotifications } from '../../store/notificationsSlice'; 


export const fetchNotificationsAPI = async (): Promise<Notification[]> => {
  const response = await client.get('/notifications');
  return response.data;
};

export const fetchUnreadNotificationCount = async (): Promise<number> => {
  const response = await client.get('/notifications/unread/count');
  return response.data.count;
};

export const acceptFollowRequest = async (notificationId: string) => {
  await client.post(`/notifications/${notificationId}/accept`);
};

export const rejectFollowRequest = async (notificationId: string) => {
  await client.post(`/notifications/${notificationId}/reject`);
};
