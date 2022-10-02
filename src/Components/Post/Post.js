import React from 'react';
import { useLoaderData } from 'react-router';
import Pos from '../Pos.js/Pos';

const Post = () => {

     const post = useLoaderData()
    return (
        <div>
            <h1>fb  psost </h1>

            {
                post.map(post => <Pos
                      key={post.id}
                post={post}>
                </Pos>
                
                )
            }
        </div>
    );
};

export default Post;