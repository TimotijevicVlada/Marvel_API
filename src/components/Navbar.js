import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/bookmark" className='link'>Bookmarked</Link>
        </div>
    )
}

export default Navbar;
