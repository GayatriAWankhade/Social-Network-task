import React, { useEffect, useState } from 'react';
import { fetchUnreadNotificationCount } from '../../lib/api/notifications';

const NotificationBadge: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchUnreadNotificationCount().then(setCount);
  }, []);

  if (count === 0) return null;

  return (
    <span className="notification-badge inline-flex items-center justify-center bg-red-500 text-white text-xs font-semibold rounded-full min-w-[20px] h-5 px-2 py-0.5 shadow-sm ring-2 ring-white animate-pulse">
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default NotificationBadge;