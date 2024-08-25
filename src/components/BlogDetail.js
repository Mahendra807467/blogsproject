import React from 'react';
import '../styles/BlogDetail.css';

function BlogDetail({ post }) {
    return (
        <div className="blog-detail">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default BlogDetail;