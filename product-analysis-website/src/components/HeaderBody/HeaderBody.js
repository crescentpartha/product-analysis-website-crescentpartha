import React from 'react';
import majesty from '../../images/majestry.png';

const HeaderBody = () => {
    return (
        <div className='grid grid-cols-2 gap-4 m-8 justify-between items-center'>
            <div className='text-justify'>
                <h1 className='text-5xl text-orange-500'>Majestry Guitar</h1>
                <h2 className='text-4xl my-2 text-blue-400'>Your best guitar</h2>
                <p>The Majesty is the result of John's unwavering demand for high-performance and playability. One of the most well-balanced and innovative instruments available, the Majesty features a neck-through-body design, unparalleled upper fret access, ergonomic in-line control knob placement, and an advanced pickup switching system, which effectively eliminates the delay between pickup selection. The Majesty is the exemplification of everything we know a John Petrucci signature model to be - innovative technology, versatile performance, and a sleek modern feel.</p>
                <button className='mt-4 bg-red-300 px-8 py-3 rounded text-blue-500'>Live Demo</button>
            </div>
            <div>
                <img src={majesty} alt="majesty guitar" />
            </div>
        </div>
    );
};

export default HeaderBody;