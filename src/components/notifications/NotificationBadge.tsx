import React, { useEffect, useState } from 'react';
import { fetchUnreadNotificationCount } from '../../lib/api/notifications';

const NotificationBadge: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchUnreadNotificationCount().then(setCount);
  }, []);

  if (count === 0) return null;

  return (
    <span className="notification-badge inline-block bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
      {count}
    </span>
  );
};

export default NotificationBadge;
