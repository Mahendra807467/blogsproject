import React from 'react';
import BlogItem from './BlogItem';
import '../styles/BlogList.css';

function BlogList({ posts }) {
    return (
        <div className="blog-list">
            {posts.map(post => (
                <BlogItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default BlogList;