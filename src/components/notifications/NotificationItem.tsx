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
      className={`notification-item p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
        notification.read 
          ? 'bg-gray-50 border-gray-200 text-gray-700' 
          : 'bg-white border-blue-200 font-semibold text-gray-900 shadow-sm ring-1 ring-blue-100'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className={`text-sm leading-relaxed mb-2 ${
            notification.read ? 'text-gray-600' : 'text-gray-900'
          }`}>
            {notification.message}
          </p>
          <small className={`text-xs font-medium ${
            notification.read ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {new Date(notification.createdAt).toLocaleString()}
          </small>
        </div>
        
        {!notification.read && (
          <div className="ml-3 flex-shrink-0">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;