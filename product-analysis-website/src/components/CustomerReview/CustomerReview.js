import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const CustomerReview = (props) => {
    const { name, picture, review, registered } = props.review;
    return (
        <div className='text-left shadow-inner rounded p-4'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row flex-warp items-center justify-start'>
                    <img className='w-16 rounded-full mr-3' src={picture} alt="" />
                    <div>
                        <h2 className='text-lg font-semibold'>{name}</h2>
                        <p className='text-sm font-normal'>
                            <FontAwesomeIcon className='mr-1 text-orange-300' icon={faCalendarDays}></FontAwesomeIcon>
                            {registered}
                        </p>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-orange-300' icon={faStarHalfStroke}></FontAwesomeIcon>
                </div>
            </div>
            <p className='text-justify'>{(review.length > 200) ? review.slice(0, 200) + "..." : review}</p>
        </div>
    );
};

export default CustomerReview;