import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/documents">Documents</Link>
                <Link className="navbar-item" to="/about">About</Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
                                <span>Login</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
