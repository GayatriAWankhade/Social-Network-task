import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { sendMessage } from '../../store/chatSlice'; 

interface MessageInputProps {
  threadId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ threadId }) => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSend = () => {
    if (text.trim() === '') return;
    dispatch(sendMessage({ threadId, content: text }));
    setText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="message-input bg-white border-t border-gray-200 p-4">
      <div className="flex items-end space-x-3 max-w-4xl mx-auto">
        {/* Attachment button */}
        <button className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>

        {/* Input container */}
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 shadow-sm transition-all duration-200 hover:shadow-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          
          {/* Emoji button inside input */}
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={text.trim() === ''}
          className={`flex-shrink-0 p-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md ${
            text.trim() === ''
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transform hover:scale-105'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>

      {/* Quick actions bar */}
      <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
        <span className="flex items-center space-x-1">
          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
          <span>to send</span>
        </span>
        <span className="flex items-center space-x-1">
          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Shift</kbd>
          <span>+</span>
          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
          <span>for new line</span>
        </span>
      </div>
    </div>
  );
};

export default MessageInput;