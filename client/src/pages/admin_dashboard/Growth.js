import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import Ratio from './Ratio';

const data = [
    {month : "Jan", users : "30"},
    {month : "Feb", users : "50"},
    {month : "Mar", users : "80"},
    {month : "Apr", users : "40"},
];

const Growth = () => {
  return (
    <ResponsiveContainer width="80%" height={500} >
    <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type={"monotone"} dataKey={"users"} stroke='#8884d8'/>
    </LineChart>

    {/* <Ratio/> */}
    </ResponsiveContainer>

    
  )
}

export default Growth
