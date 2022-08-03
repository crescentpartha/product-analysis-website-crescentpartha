import React from 'react';
import useData from '../../hooks/useData';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Scatterchart = () => {
    const [data] = useData();
    return (
        <div>
            <ScatterChart
                width={630}
                height={400}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 30,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="investment" name="invest" unit="tk/=" />
                <YAxis type="number" dataKey="revenue" name="income" unit="tk/=" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Business" data={data} fill="#8884d8" />
            </ScatterChart>
            <p className='font-semibold my-4'>Fig: <span className='text-orange-400'>Investment VS Revenue</span></p>
        </div>
    );
};

export default Scatterchart;