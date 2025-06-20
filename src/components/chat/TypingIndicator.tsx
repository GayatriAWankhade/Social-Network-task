import React, { useEffect, useState } from 'react';

interface TypingIndicatorProps {
  threadId: string;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ threadId }) => {
  // This example just uses dummy state
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Here you would subscribe to typing events from socket or API
    // Simulate typing indicator for demo
    const timer = setTimeout(() => setIsTyping(false), 3000);
    // Cleanup
    return () => clearTimeout(timer);
  }, [threadId]);

  if (!isTyping) return null;

  return <div className="typing-indicator p-2 text-gray-600 italic">Someone is typing...</div>;
};

export default TypingIndicator;
