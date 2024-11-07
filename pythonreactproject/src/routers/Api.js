import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Api() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetchApi();
        // document.title = "myapp"; // equal to title of html tag
    }, []); // adding an empty array for render useEffect only one time or else render infinite times

    async function fetchApi() {
        const response = await fetch("http://127.0.0.1:8000/list/"); // for test purpose created
        const datas = await response.json();
        // console.log(datas) // for manual checking
        setData(datas);
    }


    return (
        <div className="api-test" data-testid="api-test">
            <header className="api-header">
                <div>
                    <Link to="/"><button className="api-btn" data-testid="btn-api">Back</button></Link>
                </div>
                <h1 className="api-text" data-testid="api">Api testing..!</h1>
            </header>
            <body>
                {/* <div className="sidebar-left">
                    <p>
                        The datas from backend python
                    </p>
                </div> */}
                <div className="api-datas">
                    <ul data-testid='data-item'>
                        {data && data.map(item =>
                            <li className="ul-list" key={item.id} data-testid='item'>
                                <h3>{item.title}</h3>
                                <h5>{item.description}</h5>
                                <h5>{item.created}</h5>
                            </li>
                        )}
                    </ul>
                </div>
            </body>
        </div>
    )
};