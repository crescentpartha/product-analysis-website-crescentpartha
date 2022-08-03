import React from 'react';
import useData from '../../hooks/useData';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Linechart = () => {
    const [data] = useData();
    return (
        <div>
            <LineChart width={630} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#FF0000" />
                <Line type="monotone" dataKey="revenue" stroke="#FFFF00" />
            </LineChart>
        </div>
    );
};

export default Linechart;