import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='my-20'>
            <h2 className='text-2xl font-semibold mt-20'>All Customer's Reviews ({reviews.length})</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 m-10 p-10 shadow-lg rounded-2xl'>
                {
                    reviews.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;