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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="wage"
          stroke="rgb(179, 0, 36)"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="tips" stroke="#5a71f5" />
        <Line type="monotone" dataKey="total" stroke="#ffffff" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WageChart;
