import React, { useEffect, useState } from 'react';

interface TypingIndicatorProps {
  threadId: string;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ threadId }) => {
  // This example just uses dummy state
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    
    // Simulate typing indicator for demo
    const timer = setTimeout(() => setIsTyping(false), 3000);
    // Cleanup
    return () => clearTimeout(timer);
  }, [threadId]);

  if (!isTyping) return null;

  return (
    <div className="typing-indicator px-4 py-2 bg-gray-50 border-t border-gray-100">
      <div className="flex items-center space-x-2 max-w-4xl mx-auto">
        {/* Animated avatar */}
        <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-xs font-medium animate-pulse">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        
        {/* Typing message with animated dots */}
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600 font-medium">Someone is typing</span>
          
          {/* Animated typing dots */}
          <div className="flex space-x-1">
            <div 
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0ms', animationDuration: '1.4s' }}
            ></div>
            <div 
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '200ms', animationDuration: '1.4s' }}
            ></div>
            <div 
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '400ms', animationDuration: '1.4s' }}
            ></div>
          </div>
        </div>
        
        {/* Typing bubble animation */}
        <div className="ml-auto">
          <div className="flex items-center space-x-1 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
            <div className="flex space-x-1">
              <div 
                className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
                style={{ animationDelay: '0ms', animationDuration: '1.5s' }}
              ></div>
              <div 
                className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
                style={{ animationDelay: '500ms', animationDuration: '1.5s' }}
              ></div>
              <div 
                className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
                style={{ animationDelay: '1000ms', animationDuration: '1.5s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;