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
    <div className="follow-request p-3 bg-white rounded border space-x-2 flex items-center justify-between">
      <div>
        <p>{request.message}</p>
        <small className="text-gray-500">{new Date(request.createdAt).toLocaleString()}</small>
      </div>
      <div className="space-x-2">
        <button
          onClick={handleAccept}
          disabled={loading}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          disabled={loading}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FollowRequestItem;

