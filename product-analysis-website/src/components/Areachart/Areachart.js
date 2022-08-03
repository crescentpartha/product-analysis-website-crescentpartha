import React from 'react';
import useData from '../../hooks/useData';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';

const Areachart = () => {
    const [data] = useData();
    return (
        <div>
            <AreaChart
                width={630}
                height={320}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <p className='font-semibold my-4'>Fig: <span className='text-orange-400'>Monthly Investment VS Revenue</span></p>
        </div>
    );
};

export default Areachart;