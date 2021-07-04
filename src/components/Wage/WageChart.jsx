import React, { PureComponent } from 'react';
import { HiOutlineRss } from 'react-icons/hi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const WageChart = ({data}) => {
//     const svgRef = useRef()


const WageChart = ({data}) => {
    // const data = [
    //     {
    //       name: 'Page A',
    //       wage: 4000,
    //       tips: 2400,
    //       total: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       wage: 3000,
    //       tips: 1398,
    //       total: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       wage: 2000,
    //       tips: 9800,
    //       total: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       wage: 2780,
    //       tips: 3908,
    //       total: 2000,
    //     },
    //     {
    //       name: 'Page E',
    //       wage: 1890,
    //       tips: 4800,
    //       total: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       wage: 2390,
    //       tips: 3800,
    //       total: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       wage: 3490,
    //       tips: 4300,
    //       total: 2100,
    //     },
    //   ];
    return (
        
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wage" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tips" stroke="#82ca9d" />
          <Line type="monotone" dataKey="total" stroke="#8B9E8C" />
        </LineChart>
      
    )
}

export default WageChart


