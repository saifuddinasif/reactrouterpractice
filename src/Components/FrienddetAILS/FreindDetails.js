import React from 'react';
import { useLoaderData } from 'react-router';

const FreindDetails = () => {

    const friend = useLoaderData();
    return (
        <div>
            
    <h2>Everything you need to know about this person</h2>

     <h2>Details About : {friend.name}</h2>
     <p>call her : {friend.phone}</p>

   
    
        </div>
    );
};

export default FreindDetails;