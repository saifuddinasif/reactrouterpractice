import React from 'react';
import './Pos.css'

import { Link, useNavigate } from 'react-router-dom';

const Pos = ({post}) => {

const Navigate =  useNavigate();

const handleNavigate = () => {
    Navigate(`/post/${id}`)
}

    const {title , body,id} = post;

    return (
        <div className='post'>
          <p>{title}</p>
          <p><small>{body}</small></p>
         <Link to={`/post/${id}`}> <button>Show Details </button></Link>

         <button onClick={handleNavigate}>Show 2</button>
        </div>
    );
};

export default Pos;