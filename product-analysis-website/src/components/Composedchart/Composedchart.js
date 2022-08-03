import React from 'react';
import useData from '../../hooks/useData';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Composedchart = () => {
    const [data] = useData();
    return (
        <div>
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="month" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Area dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                <Line dataKey="revenue" stroke="#ff7300" />
            </ComposedChart>
            <p className='font-semibold my-4'>Fig: <span className='text-orange-400'>Monthly Investment VS Sell VS Revenue</span></p>
        </div>
    );
};

export default Composedchart;