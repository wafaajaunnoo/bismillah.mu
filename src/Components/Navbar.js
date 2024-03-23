import { Component } from "react";
import "./styles/Navbar.css";

class Navbar extends Component{
    state={ clicked: false };
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
            <a href="about.html">
                <img src="/favicon.png" alt="favicon"/>
            </a>
            <div>
                <ul id="navbar" className= {this.state.clicked ? "#navbar active" : "#navbar"}>
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
            <div id="mobileVersion" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div> 
        </nav>
        </>
    )
}
}

export default Navbar;
