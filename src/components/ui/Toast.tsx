import React from 'react';

const Toast: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl fixed bottom-6 right-6 z-50 border border-gray-700/50 backdrop-blur-sm ring-1 ring-white/10 transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-2 fade-in">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium leading-5 text-gray-100">
            This is a toast message!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toast;