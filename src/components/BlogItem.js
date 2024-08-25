import React from 'react';
import { Link } from 'react';
import '../styles/BlogItem.css';

function BlogItem({ post }) {
    return (
        <div className="blog-item">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
    );
}

export default BlogItem;