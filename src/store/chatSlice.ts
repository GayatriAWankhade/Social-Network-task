import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ChatThread, ChatMessage } from '../types/chat';
import { sendMessageAPI, fetchChatThreadsAPI } from '../lib/api/chat';

interface ChatState {
  threads: ChatThread[];
  loading: boolean;
}

const initialState: ChatState = {
  threads: [],
  loading: false,
};

// Async thunk for sending message
export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ threadId, content }: { threadId: string; content: string }) => {
    const message = await sendMessageAPI(threadId, content);
    return { threadId, message };
  }
);

export const fetchChatThreads = createAsyncThunk('chat/fetchThreads', async () => {
  return await fetchChatThreadsAPI();
});

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchChatThreads.pending, state => {
        state.loading = true;
      })
      .addCase(fetchChatThreads.fulfilled, (state, action: PayloadAction<ChatThread[]>) => {
        state.threads = action.payload;
        state.loading = false;
      })
      .addCase(fetchChatThreads.rejected, state => {
        state.loading = false;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        const { threadId, message } = action.payload;
        const thread = state.threads.find(t => t.id === threadId);
        if (thread) {
          thread.messages.push(message);
        }
      });
  },
});

export default chatSlice.reducer;
