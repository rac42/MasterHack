import React from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
    {name: "boys" , value: 300},
    {name: "girls" , value: 500},
];

const COLORS = ['#0088FE', '#FFBB28'];

const Ratio = () => {
    return (
    
  
    <ResponsiveContainer width="100%" height={300}>
       <PieChart>
      <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </ResponsiveContainer>
  )
  
}

export default Ratio
