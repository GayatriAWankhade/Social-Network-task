import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Notification } from '../types/notification';
import { fetchNotificationsAPI } from '../lib/api/notifications';

interface NotificationsState {
  notifications: Notification[];
  loading: boolean;
}

const initialState: NotificationsState = {
  notifications: [],
  loading: false,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetch',
  async () => {
    return await fetchNotificationsAPI();
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotifications.pending, state => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
        state.notifications = action.payload;
        state.loading = false;
      })
      .addCase(fetchNotifications.rejected, state => {
        state.loading = false;
      });
  },
});

export default notificationsSlice.reducer;
