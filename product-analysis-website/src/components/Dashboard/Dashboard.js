import React from 'react';
import Linechart from '../Linechart/Linechart';
import Areachart from '../Areachart/Areachart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-10'>This is Dashboard</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div>
                    <Linechart></Linechart>
                </div>
                <div>
                    <Areachart></Areachart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;