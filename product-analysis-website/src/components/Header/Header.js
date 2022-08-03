import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex flex-row flex-wrap items-center justify-center space-x-8 py-4 bg-gray-200 font-semibold'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Header;