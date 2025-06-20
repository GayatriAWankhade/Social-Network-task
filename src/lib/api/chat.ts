import client from './client';
import { ChatThread, ChatMessage } from '../../types/chat';

export const fetchChatThreadsAPI = async (): Promise<ChatThread[]> => {
  const response = await client.get('/chat/threads');
  return response.data;
};

export const sendMessageAPI = async (threadId: string, content: string): Promise<ChatMessage> => {
  const response = await client.post(`/chat/threads/${threadId}/messages`, { content });
  return response.data;
};

export const fetchChatThreads = fetchChatThreadsAPI;