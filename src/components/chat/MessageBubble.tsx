import React from 'react';
import { ChatMessage } from '../../types/chat';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const currentUserId = useSelector((state: RootState) => state.auth.user?.id);
  const isMine = message.senderId === currentUserId;

  return (
    <div
      className={`message-bubble max-w-xs px-4 py-2 rounded-lg ${
        isMine ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-gray-900 self-start'
      }`}
    >
      <p>{message.content}</p>
      <small className="block text-xs text-gray-700 mt-1">
        {new Date(message.timestamp).toLocaleTimeString()}
      </small>
    </div>
  );
};

export default MessageBubble;
