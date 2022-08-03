import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my Product Analysis Website</h2>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Header;