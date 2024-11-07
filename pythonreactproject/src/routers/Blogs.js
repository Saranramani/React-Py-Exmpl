import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div className="container">
            <header>
                <div>
                    <Link to="/">
                        <button className='blog-btn' data-testid="btn">
                            Back
                        </button>
                    </Link>
                </div>
                <h1 className='blog-page' data-testid="blogs">Blog Page</h1>
            </header>
            <body>
                <p></p>
            </body>
        </div>
    )
};
