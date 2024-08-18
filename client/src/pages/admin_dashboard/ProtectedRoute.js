import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    console.log("Not authorized on admin route");
    return <Navigate to='/login' />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
