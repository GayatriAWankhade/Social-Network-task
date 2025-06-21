import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Loading from './components/ui/Loading';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import AppLayout from './components/layout/AppLayout';
import FeedPage from './components/posts/FeedPage';
import ProfilePage from './components/profile/ProfilePage';
import ChatPage from './components/chat/ChatPage';

const App: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <Route path="/" element={<AppLayout><Outlet /></AppLayout>}>
            <Route index element={<Navigate to="/feed" replace />} />
            <Route path="feed" element={<FeedPage />} />
            <Route path="profile/:userId" element={<ProfilePage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
