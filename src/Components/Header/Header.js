import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
          <Link to='/home'> Home</Link>
          <Link to='/about'> About</Link>
          <Link to='/post'> post</Link>


             <a href='/products'>product</a>
            <a href='/friends'>friends</a>

        </div>
    );
};

export default Header;