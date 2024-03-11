import './Projects.css'
import React from 'react';

const Latest = ({ post, handleButton }) => {
    console.log(post)
    const handleCard = () => {
        handleButton(post.title);
       
    }
  
    return (
        <>
            <div className='project'>
                <h1>Id: {post?.id}</h1>
                <h2>Post: {post?.title}</h2>
                <h4>Description: {post?.body}</h4>
                <h3>User Id: {post?.userId}</h3>
                <div>
                    <button onClick={handleCard}>Add post</button>
                </div>
            </div>
        </>


    );
};

export default Latest;