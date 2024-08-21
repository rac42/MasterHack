import React from 'react'
import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {

    const path = useLocation().pathname;
    console.log(path);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4 w-full">
      {
      path==='/dashboard' ? (
        <h1 className='text-3xl font-bold text-center items-center'>Welocme to Admin Dashboard</h1>
      ) : (<Outlet/>)
      }
      </div>
    </div>
  )
}

export default Dashboard
