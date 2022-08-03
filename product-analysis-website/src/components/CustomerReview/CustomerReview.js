import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const CustomerReview = (props) => {
    // console.log(props.review);
    const { name, picture, review, registered } = props.review;
    return (
        <div className='text-left shadow-inner rounded p-4'>
            <div className='flex flex-row flex-wrap items-center justify-between'>
                <div className='flex flex-row flex-warp items-center justify-start'>
                    <img className='w-10 lg:w-12 md:w-10 sm:w-10 rounded-full mr-3' src={picture} alt="" />
                    <div>
                        <h2 className='text-lg font-semibold md:text-sm'>{name}</h2>
                        <p className='text-sm font-normal text-xm'>
                            <FontAwesomeIcon className='mr-1 text-orange-300 text-xm' icon={faCalendarDays}></FontAwesomeIcon>
                            {registered}
                        </p>
                    </div>
                </div>
                <div >
                    <FontAwesomeIcon className='text-orange-400 text-sm' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400 text-sm' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400 text-sm' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400 text-sm' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-300 text-sm' icon={faStarHalfStroke}></FontAwesomeIcon>
                </div>
            </div>
            <p className='text-justify text-sm mt-2'>{(review.length > 200) ? review.slice(0, 200) + "..." : review}</p>
        </div>
    );
};

export default CustomerReview;