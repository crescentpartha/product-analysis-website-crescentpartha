import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import google from '../../images/google-play.png';
import app from '../../images/app-store.png';

const Footer = () => {
    return (
        <div className='bg-gray-100 p-10 grid grid-flow-row grid-cols-1 gap-10 mt-10'>
            <div className='flex flex-row flex-wrap gap-4 justify-evenly mx-auto'>
                <div className='flex flex-wrap gap-2 items-center justify-around'>
                    <p className='font-semibold'>Download:</p>
                    <div className='flex flex-row flex-wrap gap-2 items-center justify-around'>
                        <img className='w-32' src={google} alt="Available on Android" />
                        <img className='w-32' src={app} alt="Available on App Store" />
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 items-center justify-around'>
                    <p className='font-semibold'>Follow Us:</p>
                    <div className='flex flex-row flex-wrap gap-2 items-center text-justify text-2xl '>
                        <FontAwesomeIcon className='hover:text-orange-500 hover:border-rose-400' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='hover:text-orange-500 hover:border-rose-400' icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className='hover:text-orange-500 hover:border-rose-400' icon={faLinkedin}></FontAwesomeIcon>
                        <FontAwesomeIcon className='hover:text-orange-500 hover:border-rose-400' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='hover:text-orange-500 hover:border-rose-400' icon={faTwitter}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <h2 className='text-sm font-semibold'>&copy;2005-2022 <span className='text-orange-500'>Majestry Guitar</span>. All rights reserved.</h2>
        </div>
    );
};

export default Footer;