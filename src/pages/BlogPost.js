import React from 'react';
import { useParams } from 'react';
import BlogDetail from '../components/BlogDetail';
import '../styles/BlogPost.css';

function BlogPost({ posts }) {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    return (
        <div className="blog-post">
            {post ? <BlogDetail post={post} /> : <p>Post not found</p>}
        </div>
    );
}

export default BlogPost;