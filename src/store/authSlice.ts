import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/user';

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  isAuthenticated: false,
};

export const loginUser = createAsyncThunk<User, { email: string; password: string }>(
  'auth/login',
  async ({ email, password }) => {
    const res = await axios.post('/api/login', { email, password });
    return res.data;
  }
);

// export const registerUser = createAsyncThunk<User, { name: string; email: string; password: string }>(
//   'auth/register',
//   async (userData) => {
//     const res = await axios.post('/api/register', userData);
//     return res.data;
//   }
// );
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload: { name: string; email: string; password: string }) => {
    //Simulate a fake response instead of hitting real backend
    await new Promise((res) => setTimeout(res, 1000)); // simulate delay
    return {
      id: Date.now().toString(),
      name: payload.name,
      email: payload.email,
      token: 'fake-jwt-token',
    };
  }
);

export const logoutUser = createAsyncThunk<void, void>(
  'auth/logout',
  async () => {
    await axios.post('/api/logout');
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => { state.user = action.payload; state.loading = false; state.isAuthenticated = true; })
      .addCase(loginUser.rejected, (state) => { state.loading = false; })
      .addCase(registerUser.pending, (state) => { state.loading = true; })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => { state.user = action.payload; state.loading = false; state.isAuthenticated = true; })
      .addCase(registerUser.rejected, (state) => { state.loading = false; })
      .addCase(logoutUser.fulfilled, (state) => { state.user = null; state.isAuthenticated = false; });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
