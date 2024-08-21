import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const Navigate = useNavigate();

    return (
        <div>
        <div className="w-64 h-screen bg-blue-800 text-white">
        <div className="p-4">
            <h1 className="text-2xl font-bold" onClick={() => Navigate('/dashboard')}>Admin Dashboard</h1>
        </div>
        {/* <button
            onClick={toggleSidebar}
            className="m-4 p-2 text-white rounded hover:bg-black-700 "
        >
            <IoMenuSharp />
        </button> */}
        {
            isOpen && (
                <>
                {/* <div className="p-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div> */}
                <ul className="space-y-2 p-4">
                    <li className="block py-2 px-4 rounded hover:bg-blue-700" onClick={()=> Navigate('/dashboard/growth')}>
                        Growth
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-blue-700" onClick={()=> Navigate('/dashboard/ratio')}>
                        Gender Ratio
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-blue-700" onClick={()=> Navigate('/dashboard/users')}>
                        Users List
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-blue-700" onClick={()=> Navigate('/dashboard/donations')}>
                        Donations
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-blue-700" onClick={()=> Navigate('/dashboard/adminposts')}>
                        Admin Posts
                    </li>
                </ul>
                </>
            )
        }

                {/* <div className="p-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div> */}
                {/* <ul className="space-y-2 p-4">
                    <li className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=> Navigate('/growth')}>
                        Growth
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=> Navigate('/ratio')}>
                        Gender Ratio
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=> Navigate('/users')}>
                        Users List
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=> Navigate('/donations')}>
                        Donations
                    </li>
                    <li className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=> Navigate('/posts')}>
                        Admin Posts
                    </li>
                </ul> */}
            </div>
        </div>
     )
}

export default Sidebar
