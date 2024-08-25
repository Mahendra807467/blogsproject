import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';
import '../styles/Home.css';

function Home() {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        newPost.id = posts.length + 1;
        setPosts([...posts, newPost]);
    };

    return (
        <div className="home">
            <BlogForm onAddPost={addPost} />
            <BlogList posts={posts} />
        </div>
    );
}

export default Home;