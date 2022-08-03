import React from 'react';
import { CustomLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my Product Analysis Website</h2>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Header;