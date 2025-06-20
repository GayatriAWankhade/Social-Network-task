import React from 'react';
import { Notification } from '../../types/notification';
import FollowRequestItem from './FollowRequestItem';

interface NotificationItemProps {
  notification: Notification;
  onUpdate: () => void; // callback to update parent on action
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification, onUpdate }) => {
  if (notification.type === 'follow_request') {
    return (
      <FollowRequestItem request={notification} onHandled={onUpdate} />
    );
  }

  return (
    <div
      className={`notification-item p-3 rounded border ${
        notification.read ? 'bg-gray-100' : 'bg-white font-semibold'
      }`}
    >
      <p>{notification.message}</p>
      <small className="text-gray-500">{new Date(notification.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default NotificationItem;
