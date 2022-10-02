import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
          <NavLink 
          className={({isActive}) => isActive ? 'active' : undefined}
          to='/home'> Home</NavLink>
          <NavLink to='/about'> About</NavLink>
          <NavLink to='/post'> post</NavLink>


             <a href='/products'>product</a>
            <a href='/friends'>friends</a>

        </div>
    );
};

export default Header;