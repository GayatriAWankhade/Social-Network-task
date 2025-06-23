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
    <section className="chat-thread flex-1 flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Header */}
      <header className="p-4 border-b border-gray-200 bg-white shadow-sm backdrop-blur-sm bg-white/95">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Avatar group for participants */}
            <div className="flex -space-x-2">
              {thread.participants.slice(0, 3).map((participant, index) => (
                <div
                  key={participant.id || index}
                  className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-medium shadow-sm"
                  style={{ zIndex: thread.participants.length - index }}
                >
                  {participant.name.charAt(0).toUpperCase()}
                </div>
              ))}
              {thread.participants.length > 3 && (
                <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-sm">
                  +{thread.participants.length - 3}
                </div>
              )}
            </div>
            
            <div>
              <h2 className="font-semibold text-gray-900 text-lg">
                Chat with {thread.participants.map(p => p.name).join(', ')}
              </h2>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">
                  {thread.participants.length} participant{thread.participants.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
          
          {/* Header actions */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Messages Area */}
      <div 
        className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth custom-scrollbar"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e0 transparent'
        }}
      >
        
        {thread.messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Start the conversation</h3>
            <p className="text-sm text-gray-500 text-center max-w-xs">
              Send your first message to get the conversation started with {thread.participants.map(p => p.name).join(', ')}.
            </p>
          </div>
        ) : (
          <>
            {thread.messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
          </>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Footer Area */}
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <TypingIndicator threadId={thread.id} />
        <div className="p-4">
          <MessageInput threadId={thread.id} />
        </div>
      </div>
    </section>
  );
};

export default ChatThread;