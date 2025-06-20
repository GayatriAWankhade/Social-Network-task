import React from 'react';
import { ChatThread } from '../../types/chat';

interface ChatListProps {
  threads: ChatThread[];
  activeThreadId: string | null;
  onSelectThread: (id: string) => void;
  loading: boolean;
}

const ChatList: React.FC<ChatListProps> = ({ threads, activeThreadId, onSelectThread, loading }) => {
  if (loading) return <div className="w-64 p-4">Loading chats...</div>;

  return (
    <aside className="chat-list w-64 border-r overflow-y-auto bg-white">
      {threads.length === 0 && <p className="p-4 text-gray-600">No chats found</p>}
      <ul>
        {threads.map(thread => (
          <li
            key={thread.id}
            onClick={() => onSelectThread(thread.id)}
            className={`cursor-pointer p-3 border-b hover:bg-gray-100 ${
              activeThreadId === thread.id ? 'bg-blue-100 font-semibold' : ''
            }`}
          >
            <div>{thread.participants.map(p => p.name).join(', ')}</div>
            <div className="text-sm text-gray-600 truncate">
              {thread.messages.length > 0
                ? thread.messages[thread.messages.length - 1].content
                : 'No messages yet'}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatList;
