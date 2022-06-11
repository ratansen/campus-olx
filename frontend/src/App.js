import React , {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import PostAd from './pages/PostAd';
import { useSelector } from 'react-redux';
import { axios } from './api';


function App() {
    const email = useSelector((state: RootState) => state.auth.email)
    console.log(email)
    return (
        <div>
        <Router>

        <Navbar />
        <Routes >
            <Route path = '/' exact element = {<Home />} />
            <Route path = '/category' element = {<Category />} />
            <Route path = 'product/:id' element = {<Product />} />
            <Route path = '/post-ad' element = {<PostAd />} />
        </Routes>
        </Router>
        </div>
    );
}



export default App;
