import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        newPost.id = posts.length + 1;
        setPosts([...posts, newPost]);
    };

    return (
        <div className="app">
            <Router>
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home posts={posts} onAddPost={addPost} />} />
                        <Route path="/post/:id" element={<BlogPost posts={posts} />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;