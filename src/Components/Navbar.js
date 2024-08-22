import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navBarItems = ["About Us", "Halaal Eats", "Muṣallā", "Contact Us"];

  return (
    <>
      <nav>
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            {navBarItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="mobileVersion" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
