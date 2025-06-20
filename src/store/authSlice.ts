import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const res = await axios.post('/api/login', credentials);
  return res.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const res = await axios.post('/api/register', userData);
  return res.data;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await axios.post('/api/logout');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
