import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {


const post = useLoaderData();
console.log(post)
const {id,title,userId, body} = post;
   
const navigate = useNavigate();

  

const handleNavigate = ( ) => {

    navigate(`/friend/${userId}`)
}


    return (
        <div>
            <h2>Details About Post : {id}</h2>
            <h2> Post title : {title}</h2>
            <h2> Post body : {body}</h2>

            <button onClick={handleNavigate}>GET AUTHOR</button>

        </div>
    );
};

export default PostDetails;