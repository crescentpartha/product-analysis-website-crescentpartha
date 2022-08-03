import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <h2 className='text-2xl font-semibold mt-20'>Customer Reviews (3)</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 m-10 p-10 shadow-lg rounded-2xl'>
                {
                    reviews.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
            <button className='mt-4 bg-red-300 px-8 py-1 rounded text-blue-500 text-md font-semibold hover:bg-orange-500 hover:text-white'>See All Reviews</button>
        </div>
    );
};

export default CustomerReviews;