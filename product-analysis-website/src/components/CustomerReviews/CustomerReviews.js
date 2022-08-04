import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    // Use custom hook
    // const [reviews, setReviews] = useReviews();
    const [reviews] = useReviews();

    let rest = [];
    const handleCustomerReview = () => {
        reviews.forEach(element => {
            if (rest.length < 3) {
                rest.push(element);
            }
        });
    }
    handleCustomerReview();
    // console.log(rest);

    return (
        <div>
            <h2 className='text-2xl font-semibold mt-10'>Customer Reviews ({rest.length})</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-8 m-10 p-10 shadow-lg rounded-2xl'>
                {
                    rest.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
            <div className='my-5'>
                <Link className='my-5 bg-red-300 px-8 py-1 rounded text-blue-500 text-md font-semibold hover:bg-orange-500 hover:text-white' to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default CustomerReviews;