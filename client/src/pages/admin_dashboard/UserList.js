import React from 'react'


const users = [
    {id: 1, name: "Rachit", email: "rachit0942@gmail.com"},
    {id: 2, name: "Panda", email: "abc@gmail.com"},
    {id: 3, name: "Negi", email: "def@gmail.com"},
    {id: 4, name: "Pranav", email: "xyz@gmail.com"},
]


const UserList = () => {
  return (
    <table className='min-w-full bg-white'>
    <thead>
        <tr>
            <th className='py-2 px-4'>ID</th>
            <th className='py-2 px-4'>NAME</th>
            <th className='py-2 px-4'>EMAIL</th>
        </tr>
    </thead>

    <tbody>
        {
            users.map( (user) => (
                <tr key={user.id}>
                    <td className='py-2 px-4'>{user.id}</td>
                    <td className='py-2 px-4'>{user.name}</td>
                    <td className='py-2 px-4'>{user.email}</td>
                </tr>
        ))
        }
        
    </tbody>

    </table>
  )
}

export default UserList
