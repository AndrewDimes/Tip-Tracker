import React, { PureComponent } from 'react';
import { HiOutlineRss } from 'react-icons/hi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const WageChart = ({ data }) => {
  return (
    <ResponsiveContainer width="60%" height="40%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="wage"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="tips" stroke="#82ca9d" />
        <Line type="monotone" dataKey="total" stroke="#8B9E8C" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WageChart;
