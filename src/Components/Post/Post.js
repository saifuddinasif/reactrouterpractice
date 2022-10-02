import React from 'react';
import { useLoaderData } from 'react-router';

const Post = () => {

     const post = useLoaderData()
    return (
        <div>
            <h1>fb  psost </h1>
        </div>
    );
};

export default Post;