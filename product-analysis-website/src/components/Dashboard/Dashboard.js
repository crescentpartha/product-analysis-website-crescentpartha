import React from 'react';
import Linechart from '../Linechart/Linechart';
import Areachart from '../Areachart/Areachart';
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Composedchart from '../Composedchart/Composedchart';

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
                <div>
                    <Barchart></Barchart>
                </div>
                <div>
                    <Piechart></Piechart>
                </div>
                <div>
                    <Composedchart></Composedchart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;