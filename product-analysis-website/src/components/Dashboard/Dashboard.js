import React from 'react';
import Linechart from '../Linechart/Linechart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-10'>This is Dashboard</h2>
            <div>
                <Linechart></Linechart>
            </div>
        </div>
    );
};

export default Dashboard;