import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <nav>
                <a href="/">
                    <img src="/logo.png" alt="logo"/>
                </a>
                <div>
                    <ul id="navbar" className={clicked ? "active" : ""}>
                        <li>
                            <Link to="/home">About Us</Link>
                        </li>
                        <li>
                            <Link to="/halaaleats">Halaal Eats</Link>
                        </li>
                        <li>
                            <Link to="/musalla">Muṣallā</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div id="mobileVersion" onClick={handleClick}>
                    <i id="bar" className={clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div> 
            </nav>
        </>
    );
}

export default Navbar;
