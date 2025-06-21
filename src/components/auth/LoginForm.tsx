import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/authSlice';
import { useAppDispatch } from '../../store';
// import { setUser } from '../../store/authSlice';
import { setUser } from '../../store/authSlice'
import { Link } from 'react-router-dom'; // ✅ import Link for navigation

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  try {
    const loggedInUser = await dispatch(loginUser({ email, password })).unwrap();
    dispatch(setUser(loggedInUser)); // ✅ set user
    navigate('/feed');
  } catch (err) {
    setError('Invalid credentials');
  }
};

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>

      {/* ✅ Register Link (added below the form) */}
      <p className="mt-4 text-sm text-center">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
