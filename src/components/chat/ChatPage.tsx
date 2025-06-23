import React, { useEffect, useState } from 'react';
import ChatList from './ChatList';
import ChatThread from './ChatThread';
import { ChatThread as ChatThreadType } from '../../types/chat';
import { fetchChatThreads } from '../../lib/api/chat';

const ChatPage: React.FC = () => {
  const [threads, setThreads] = useState<ChatThreadType[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChatThreads()
      .then((data) => {
        setThreads(data);
        if (data.length > 0) setActiveThreadId(data[0].id);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleThreadSelect = (id: string) => {
    setActiveThreadId(id);
  };

  return (
    <div className="chat-page flex h-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
      {/* Sidebar with ChatList */}
      <div className="w-80 flex-shrink-0 bg-gray-50 border-r border-gray-200">
        <div className="p-4 bg-white border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Messages
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {threads.length} {threads.length === 1 ? 'conversation' : 'conversations'}
          </p>
        </div>
        <div className="h-full overflow-y-auto">
          <ChatList
            threads={threads}
            activeThreadId={activeThreadId}
            onSelectThread={handleThreadSelect}
            loading={loading}
          />
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col bg-white">
        {activeThreadId ? (
          <ChatThread thread={threads.find(t => t.id === activeThreadId)!} />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500 bg-gradient-to-br from-gray-50 to-white">
            <div className="text-center max-w-md px-6">
              {/* Welcome illustration */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              
              {/* Welcome message */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to Messages
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Select a chat from the sidebar to start messaging, or create a new conversation to get started.
              </p>
              
              {/* Action button */}
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Start New Chat
              </button>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-50 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-50 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;