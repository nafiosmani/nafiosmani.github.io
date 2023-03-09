import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchId, setSearchId] = useState(id);

    function onSearch() {
        fetchPosts(userId)
    }


    async function fetchPosts(userId) {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userID=${userId || id}`
        );
        setPosts(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="post__search">
                <button>← Back</button>
                <div className="post__search--container">
                    <label className="post__search--label">Search by Id</label>
                    <input
                        type="number" 
                        value={searchId} 
                        onChange={(event) => setSearchId(event.target.value)}
                        onKeyPress={(event) => event.key === 'Enter' && onSearch()}
                    />
                    <button onClick={() => onSearch()}>Enter</button>
                </div>
            </div>
            {
                loading
                    ? new Array[10].fill(0).map((_, index) => (
                        <div className="post" key={index}>
                            <div className="post__title">
                                <div className="post__title--skeleton"></div>
                            </div>
                            <div className="post__body">
                                <p className="post__body--skeleton"></p>
                            </div>
                        </div>
                    ))
                    :
                    posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="post__title">{post.title}</div>
                            <p className="post__body">{post.body}</p>
                        </div>
                    ))}
        </>
    );
};

export default Posts;