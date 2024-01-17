import React from 'react';
import './chart.css'; 
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Chart = () => {
  const data = [
    { name: 'Jan', ActiveUser: 4000 },
    { name: 'Feb', ActiveUser: 3000 },
    { name: 'Mar', ActiveUser: 2000 },
    { name: 'Apr', ActiveUser: 2580 },
    { name: 'May', ActiveUser: 5890 },
    { name: 'Jun', ActiveUser: 2390 },
    { name: 'Jul', ActiveUser: 3490 },
    { name: 'Aug', ActiveUser: 5900 },
    { name: 'Sep', ActiveUser: 2560 },
    { name: 'Oct', ActiveUser: 3200 },
    { name: 'Nov', ActiveUser: 6500 },
    { name: 'Dec', ActiveUser: 1800 },
  ];

  return (
    <div className='charts'>
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#00000" />
          <Line type={'monotone'} dataKey="ActiveUser" stroke="#000000" />
          <Tooltip  />
          <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
