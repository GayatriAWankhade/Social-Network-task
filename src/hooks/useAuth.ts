import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types/user';

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user) as User | null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay if needed (remove in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // reduce or remove the delay

    return () => clearTimeout(timeout);
  }, [user]);

  const isAuthenticated = !!user;

  return {
    user,
    isAuthenticated,
    loading,
  };
};
