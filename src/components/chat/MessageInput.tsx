import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/chatSlice'; // assume thunk for sending message

interface MessageInputProps {
  threadId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ threadId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

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
    <div className="message-input border-t p-3 bg-white flex space-x-2">
      <input
        type="text"
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
