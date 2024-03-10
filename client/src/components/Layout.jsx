import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="mt-6 min-w-96 min-h-10 p-6 bg-gradient-to-r from-slate-400 to-orange-50 rounded-lg border border-red-400 hover:opacity-70 cursor-pointer">
      {children}
    </div>
  );
};

export default Layout