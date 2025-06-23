import React, { useState } from 'react';
import { Notification } from '../../types/notification';
import { acceptFollowRequest, rejectFollowRequest } from '../../lib/api/notifications';

interface FollowRequestItemProps {
  request: Notification;
  onHandled: () => void;
}

const FollowRequestItem: React.FC<FollowRequestItemProps> = ({ request, onHandled }) => {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      await acceptFollowRequest(request.id);
      onHandled();
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    try {
      await rejectFollowRequest(request.id);
      onHandled();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="follow-request p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between">
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 font-medium text-sm leading-relaxed mb-1">
          {request.message}
        </p>
        <small className="text-gray-500 text-xs font-normal">
          {new Date(request.createdAt).toLocaleString()}
        </small>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        <button
          onClick={handleAccept}
          disabled={loading}
          className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-w-[80px]"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            'Accept'
          )}
        </button>
        
        <button
          onClick={handleReject}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-w-[80px]"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            'Reject'
          )}
        </button>
      </div>
    </div>
  );
};

export default FollowRequestItem;