import "./Navbar.css";

function Navbar(){
    return(
        <>
        <nav>
            <a href="about.html">
                <img src="/favicon.png" alt="favicon"/>
            </a>
            <div>
                <ul id="navbar">
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="halaal-eats.html">Halaal Eats</a>
                    </li>
                    <li>
                        <a href="musalla.html">Muṣallā</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;