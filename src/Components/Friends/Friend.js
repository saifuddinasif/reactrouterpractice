import React from 'react';
import { useLoaderData } from 'react-router';
import Fri from '../Fri/Fri';


const Friend = () => {

  const friends = useLoaderData();

console.log(friends)
    return (
        <div>
         <h1>Friends : {friends.length}</h1>
       

       {
        friends.map( friend => <Fri

          key={friend.id}
          friend={friend}
>

        </Fri>)
       }
            
      
 

        </div>
    );
};

export default Friend;