export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface ChatThread {
  id: string;
  participants: User[];
  messages: ChatMessage[];
  lastUpdated: string;
}
