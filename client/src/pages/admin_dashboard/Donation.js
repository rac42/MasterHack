import React from 'react'

const donations = [
    {id: 1, name: "Rachit", email: "rachit0942@gmail.com", amount:"1000"},
    {id: 2, name: "Panda", email: "abc@gmail.com", amount:"2000"},
    {id: 3, name: "Negi", email: "def@gmail.com", amount:"8000"},
    {id: 4, name: "Pranav", email: "xyz@gmail.com", amount:"6000"},
];

const Donation = () => {
  return (
    <table className='min-w-full bg-white'>
    <thead>
        <tr>
            <th className='py-2 px-4'>ID</th>
            <th className='py-2 px-4'>NAME</th>
            <th className='py-2 px-4'>EMAIL</th>
            <th className='py-2 px-4'>AMOUNT</th>
        </tr>
    </thead>

    <tbody>
        {
            donations.map( (donation) => (
                <tr key={donation.id}>
                    <td className='py-2 px-4'>{donation.id}</td>
                    <td className='py-2 px-4'>{donation.name}</td>
                    <td className='py-2 px-4'>{donation.email}</td>
                    <td className='py-2 px-4'>{donation.amount}</td>
                </tr>
        ))
        }
        
    </tbody>

    </table>
  )
}

export default Donation
