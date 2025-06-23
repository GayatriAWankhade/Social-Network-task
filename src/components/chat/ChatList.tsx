import React from 'react';
import { ChatThread } from '../../types/chat';

interface ChatListProps {
  threads: ChatThread[];
  activeThreadId: string | null;
  onSelectThread: (id: string) => void;
  loading: boolean;
}

const ChatList: React.FC<ChatListProps> = ({ threads, activeThreadId, onSelectThread, loading }) => {
  if (loading) return (
    <div className="flex items-center justify-center p-8 text-gray-500">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm font-medium">Loading chats...</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
      {threads.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-gray-400">
          <svg className="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-sm font-medium">No chats found</p>
          <p className="text-xs text-gray-300 mt-1">Start a new conversation to get started</p>
        </div>
      )}
      
      <div className="divide-y divide-gray-100">
        {threads.map(thread => (
          <div
            key={thread.id}
            onClick={() => onSelectThread(thread.id)}
            className={`cursor-pointer p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm ${
              activeThreadId === thread.id 
                ? 'bg-blue-50 border-r-3 border-r-blue-500 shadow-sm' 
                : 'hover:border-r-2 hover:border-r-gray-200'
            }`}
          >
            <div className={`font-medium text-sm mb-2 ${
              activeThreadId === thread.id ? 'text-blue-900' : 'text-gray-900'
            }`}>
              {thread.participants.map(p => p.name).join(', ')}
            </div>
            <div className={`text-xs leading-relaxed line-clamp-2 ${
              activeThreadId === thread.id ? 'text-blue-700' : 'text-gray-600'
            }`}>
              {thread.messages.length > 0
                ? thread.messages[thread.messages.length - 1].content
                : 'No messages yet'}
            </div>
            {activeThreadId === thread.id && (
              <div className="mt-2 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="ml-2 text-xs text-blue-600 font-medium">Active</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
