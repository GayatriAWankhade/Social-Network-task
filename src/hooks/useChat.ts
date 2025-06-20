import { useEffect, useState } from 'react';
import { ChatThread } from '../types/chat';
import { fetchChatThreads } from '../lib/api/chat';

export const useChat = () => {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChatThreads()
      .then(setThreads)
      .finally(() => setLoading(false));
  }, []);

  return { threads, loading };
};
