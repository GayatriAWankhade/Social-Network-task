import React, { useEffect, useState } from 'react';
import NotificationItem from './NotificationItem';
import { fetchNotificationsAPI as fetchNotifications } from '../../lib/api/notifications';
import { Notification } from '../../types/notification';

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications()
      .then(setNotifications)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="p-6 flex items-center justify-center">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600 font-medium">Loading notifications...</span>
      </div>
    </div>
  );

  if (notifications.length === 0) return (
    <div className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-6h10v6z" />
        </svg>
      </div>
      <p className="text-gray-500 font-medium">No notifications yet</p>
      <p className="text-gray-400 text-sm mt-1">You're all caught up!</p>
    </div>
  );

  return (
    <div className="notification-center max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 space-y-3">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Notifications</h2>
        <p className="text-sm text-gray-500">{notifications.length} notification{notifications.length !== 1 ? 's' : ''}</p>
      </div>
      
      <div className="space-y-3">
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
    </div>
  );
};

export default NotificationCenter;