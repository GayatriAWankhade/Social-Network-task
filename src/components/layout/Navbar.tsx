import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { logoutUser } from '../../store/authSlice';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg shadow-blue-500/10 p-4 flex justify-between items-center border-b border-slate-200/50 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
        SocialApp
      </Link>
      <div className="flex gap-6 items-center">
        {authUser ? (
          <>
            <span className="text-slate-700 font-medium bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
              Hello, <span className="text-blue-600 font-semibold">{authUser.name}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
