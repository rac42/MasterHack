import React from 'react'
import Sidebar from "../../components/Sidebar";
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4 w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
