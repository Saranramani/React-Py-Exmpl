import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


const Home = () => {
    return (

        <div data-testid="home">
            <h1 data-testid="home-page" className='home-page'>Home Page</h1>
            <Link to="/"> </Link><br></br>
            <Link to="/form"><button data-testid="btn-form" className='btn-form'>Go to Form</button></Link><br></br><br></br>
            <Link to="/api"><button data-testid="btn-api" className='btn-api'>Go to Api</button></Link><br></br><br></br>
            <Link to="/blogs"><button data-testid="btn-blog" className='btn-blog'>Go to Blog</button></Link><br></br><br></br>
        </div>

    )
};
export default Home;
