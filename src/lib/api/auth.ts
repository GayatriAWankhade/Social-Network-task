import client from './client';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const response = await client.post('/auth/login', payload);
  return response.data;
};

export const register = async (payload: RegisterPayload) => {
  const response = await client.post('/auth/register', payload);
  return response.data;
};

export const logout = async () => {
  await client.post('/auth/logout');
};
