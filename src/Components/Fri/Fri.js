import React from 'react';
import { Link } from 'react-router-dom';
import './Fri.css'

const Fri = ({friend}) => {

    console.log(friend)
    return (
        <div className='friend'>
            <h3>name : {friend.name}</h3>
             
            <h3>email : {friend.email}</h3>
            <h3>username : <Link to={`/friend/${friend.id}`}>{friend.username}</Link>  </h3>


        </div> 
    );
};

export default Fri;