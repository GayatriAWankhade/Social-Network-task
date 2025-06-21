import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

// const client = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Reads from .env
  withCredentials: true, // Only needed if backend uses cookies (like JWT in cookies)
});


// Optional: Add auth token to headers if available
client.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
