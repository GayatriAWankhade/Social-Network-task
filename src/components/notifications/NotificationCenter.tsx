import React, { useEffect, useState } from 'react';
import NotificationItem from './NotificationItem';
import { fetchNotifications } from '../../lib/api/notifications';
import { Notification } from '../../types/notification';

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications()
      .then(setNotifications)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4">Loading notifications...</div>;

  if (notifications.length === 0) return <div className="p-4">No notifications.</div>;

  return (
    <div className="notification-center max-w-md mx-auto p-4 bg-white rounded shadow space-y-2">
      {notifications.map((notif) => (
        <NotificationItem
          key={notif.id}
          notification={notif}
          onUpdate={() => {
            // Optionally refetch or update local state to mark read, etc.
          }}
        />
      ))}
    </div>
  );
};

export default NotificationCenter;
