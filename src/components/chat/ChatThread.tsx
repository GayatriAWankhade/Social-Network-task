import React, { useRef, useEffect } from 'react';
import { ChatThread as ChatThreadType } from '../../types/chat';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import TypingIndicator from './TypingIndicator';

interface ChatThreadProps {
  thread: ChatThreadType;
}

const ChatThread: React.FC<ChatThreadProps> = ({ thread }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thread.messages]);

  return (
    <section className="chat-thread flex-1 flex flex-col bg-gray-50">
      <header className="p-4 border-b bg-white font-semibold">
        Chat with {thread.participants.map(p => p.name).join(', ')}
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {thread.messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <TypingIndicator threadId={thread.id} />
      <MessageInput threadId={thread.id} />
    </section>
  );
};

export default ChatThread;
