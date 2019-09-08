import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={"/doc/1"}>View Doc 1</Link>
        </div>
    )
}

export default Home;
