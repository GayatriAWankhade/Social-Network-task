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
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`message-bubble max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
          isMine 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md' 
            : 'bg-white text-gray-900 border border-gray-200 rounded-bl-md'
        }`}
      >
        {/* Message content */}
        <p className={`text-sm leading-relaxed ${isMine ? 'text-white' : 'text-gray-800'}`}>
          {message.content}
        </p>
        
        {/* Timestamp and status */}
        <div className={`flex items-center justify-between mt-2 ${isMine ? 'flex-row-reverse' : 'flex-row'}`}>
          <small className={`text-xs ${
            isMine ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {new Date(message.timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </small>
          
          {/* Message status indicator for sent messages */}
          {isMine && (
            <div className="flex items-center space-x-1 ml-2">
              <svg className="w-3 h-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <svg className="w-3 h-3 text-blue-200 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Message tail/pointer */}
        <div className={`absolute w-0 h-0 ${
          isMine 
            ? 'right-0 bottom-0 border-l-8 border-l-blue-600 border-t-8 border-t-transparent' 
            : 'left-0 bottom-0 border-r-8 border-r-white border-t-8 border-t-transparent'
        }`} style={{ transform: 'translateY(100%)' }} />
      </div>
    </div>
  );
};

export default MessageBubble;