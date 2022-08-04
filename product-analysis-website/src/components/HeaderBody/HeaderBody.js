import React from 'react';
import majesty from '../../images/majestry.png';

const HeaderBody = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-clos-1 gap-y-15 gap-8 m-8 mt-20 p-8 justify-between items-center'>
            <div className='text-justify'>
                <h1 className='text-3xl lg:text-5xl md:text-4xl sm:text-3xl text-orange-500'>Majestry Guitar</h1>
                <h2 className='text-2xl lg:text-4xl md:text-3xl sm:text-2xl my-2 text-blue-400'>Your best guitar</h2>
                <p>The Majesty is the result of John's unwavering demand for high-performance and playability. One of the most well-balanced and innovative instruments available, the Majesty features a neck-through-body design, unparalleled upper fret access, ergonomic in-line control knob placement, and an advanced pickup switching system, which effectively eliminates the delay between pickup selection. The Majesty is the exemplification of everything we know a John Petrucci signature model to be - innovative technology, versatile performance, and a sleek modern feel.</p>
                <button onClick={() => alert('Live Demo is not available right now!!!')} className='mt-4 bg-red-300 px-8 py-3 rounded text-blue-500 text-lg font-semibold hover:bg-orange-500 hover:text-white'>Live Demo</button>
            </div>
            <div className='lg:hover:-rotate-12 md:hover:-rotate-12 sm:hover:-rotate-12 duration-1000 delay-100'>
                <img src={majesty} alt="majesty guitar" />
            </div>
        </div>
    );
};

export default HeaderBody;