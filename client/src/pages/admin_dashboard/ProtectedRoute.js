import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  // if (!isAuthenticated) {
  //   console.log("Not authorized on admin route");
  //   return <Navigate to='/login' />;
  // }
  const { isAdmin } = useSelector((state) => state.user);

  if (!isAdmin) {
      console.log("Not authorized on admin route");
      return <Navigate to='/login' />;
    }
  
  return <Outlet />;
};

export default ProtectedRoute;
