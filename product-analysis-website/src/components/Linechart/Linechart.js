import React from 'react';
import useData from '../../hooks/useData';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Linechart = () => {
    const [data] = useData();
    return (
        <div>
            <LineChart
                width={530} 
                height={250} 
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#FF0000" />
                <Line type="monotone" dataKey="revenue" stroke="#FFFF00" />
            </LineChart>
            <p className='font-semibold my-4'>Fig: <span className='text-orange-400'>Monthly Investment VS Revenue</span></p>
        </div>
    );
};

export default Linechart;