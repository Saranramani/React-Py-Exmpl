import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Api from "./Api";
import Form from "./Form";
import Blogs from "./Blogs";
import Home from "./Home";

export default function RouterApp() {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/api" element={<Api />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </div>
    )
};