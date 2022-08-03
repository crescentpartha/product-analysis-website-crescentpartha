import React from 'react';

const CustomerReview = (props) => {
    const { name, picture, review, registered } = props.review;
    return (
        <div className='text-left shadow-inner rounded p-4'>
            <div className='flex flex-row flex-warp items-center justify-start'>
                <img className='w-16 rounded-full mr-3' src={picture} alt="" />
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p className='text-sm font-normal'>Date: {registered}</p>
                </div>
            </div>
            <p className='text-justify'>{(review.length > 200) ? review.slice(0, 200) + "..." : review}</p>
        </div>
    );
};

export default CustomerReview;