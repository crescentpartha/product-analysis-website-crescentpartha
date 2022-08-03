import React from 'react';
import useData from '../../hooks/useData';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const Barchart = () => {
    const [data] = useData();
    return (
        <div>
            <BarChart
                width={630}
                height={320}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
            <p className='font-semibold my-4'>Fig: <span className='text-orange-400'>Monthly Investment VS Revenue</span></p>
        </div>
    );
};

export default Barchart;