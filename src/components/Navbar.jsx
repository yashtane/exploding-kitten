// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/highscore">Highscore</a></li>
                <li><a href="/board">Board</a></li>
            </ul>
        </nav>
);
};

export default Navbar;
