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
    <div className="chat-page flex h-full max-w-6xl mx-auto border rounded shadow overflow-hidden">
      <ChatList
        threads={threads}
        activeThreadId={activeThreadId}
        onSelectThread={handleThreadSelect}
        loading={loading}
      />
      {activeThreadId ? (
        <ChatThread thread={threads.find(t => t.id === activeThreadId)!} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a chat to start messaging
        </div>
      )}
    </div>
  );
};

export default ChatPage;
