import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './blogs'
import Home from './Home'
import Navbar from './Navbar'; 
export default function App() {
    return(
        <>
        <Navbar />
        <div>
            <BrowserRouter>
            <Routes>
                <Route path ="/home" element={<Home />}></Route>
                <Route path ="/blogs" element={<Blogs />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}