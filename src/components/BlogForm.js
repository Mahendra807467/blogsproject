import React, { useState } from 'react';
import '../styles/BlogForm.css';

function BlogForm({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && excerpt && content) {
            onAddPost({ title, excerpt, content });
            setTitle('');
            setExcerpt('');
            setContent('');
        }
    };

    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Excerpt:</label>
                <textarea 
                    value={excerpt} 
                    onChange={(e) => setExcerpt(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
}

export default BlogForm;