import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    let data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
       <div className='d-flex container mt-5'>
           <div className=''>
               <h1 className='text-center'>Line Chart</h1>
         <LineChart width={500} height={300} data={data}>
         <Line dataKey={'investment'}></Line>
         <Line dataKey={'sell'}></Line>
         <Line dataKey={'revenue'}></Line>
         <XAxis dataKey={'month'}></XAxis>
         <YAxis></YAxis>
         <Tooltip></Tooltip>
     </LineChart>
    </div>
    <div>
        <h1 className='text-center'>Bar Chart</h1>
   <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
          <Bar dataKey="sell" fill="#82b" />
        </BarChart>
      </div>
       
     </div>
     
    );
};

export default Dashboard;