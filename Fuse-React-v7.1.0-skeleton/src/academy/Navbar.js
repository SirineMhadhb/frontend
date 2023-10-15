import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Bar = () => (
    <nav className="nav-scroller .nav">
        <Link className="blog-header-logo" to='/'>Blog Lyfe</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link className="blog-header-logo" exact='true' to='/blog'>Blog</Link>
                </li>
            </ul>
        </div>
    </nav>
);


