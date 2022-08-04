import React from 'react';
import Linechart from '../Linechart/Linechart';
import Areachart from '../Areachart/Areachart';
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Composedchart from '../Composedchart/Composedchart';
import Scatterchart from '../Scatterchart/Scatterchart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-10'>Dashboard is the collection of all Charts</h2>
            <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-10 items-center justify-around'>
                <div className='my-5'>
                    <Linechart></Linechart>
                </div>
                <div className='my-5'>
                    <Areachart></Areachart>
                </div>
                <div className='my-5'>
                    <Barchart></Barchart>
                </div>
                <div className='my-5'>
                    <Piechart></Piechart>
                </div>
                <div className='my-5'>
                    <Composedchart></Composedchart>
                </div>
                <div className='my-5'>
                    <Scatterchart></Scatterchart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;