import React, { useEffect, useState } from 'react';
import Latest from './Latest';
import "./Container.css"


const Post = () => {
    const [post, setPost] = useState([]);
    const [count, setCount] = useState(0);
    const [postTitle, setPostTitle] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const handleButton = (title) => {
        const newCount = count + 1;
        setCount(newCount)
        setPostTitle(title)
    }
    
    return (
        <div>
            <h1>This is Facebook Special Post</h1>
            <div className='jewel'>
                <h2>Count Post: <span style={{ color: 'red' }}> {count}</span> </h2>
                <hr />
                <h3 style={{color:'red'}}>Post name: <span id='show' style={{color: 'blue'}}>{postTitle}</span> </h3>
            </div>
            <div className='container'>
                {
                    post.map(post => <Latest post={post} handleButton={handleButton}></Latest>)
                }
            </div>
        </div >

    );
};

export default Post;