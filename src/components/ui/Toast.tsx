import React from 'react';

const Toast: React.FC = () => {
  return (
    <div className="bg-black text-white px-4 py-2 rounded shadow-lg fixed bottom-4 right-4 z-50">
      This is a toast message!
    </div>
  );
};

export default Toast;
