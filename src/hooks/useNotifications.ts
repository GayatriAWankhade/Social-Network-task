import { useEffect, useState } from 'react';
import { Notification } from '../types/notification';
import { fetchNotificationsAPI as fetchNotifications } from '../lib/api/notifications';


export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications()
      .then(setNotifications)
      .finally(() => setLoading(false));
  }, []);

  return { notifications, loading };
};
