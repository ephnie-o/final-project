import logo from "./LittleLemonLogo.png";
import './App.css';
import {useState} from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav className="navbar">
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><a className="home" href="/">Home</a></li>
                <li><a href="/about-me">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="reservations">Reservations</a></li>
                <li><a href="orderOnline">Order Online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
            <button className="hamburger" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>
            <img height="50" src={logo} alt="logo"/>
            <button className="basket">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 10l-2 -6" />
                    <path d="M7 10l2 -6" />
                    <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043" />
                    <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
            </button>
        </nav>
    );
}

export default Nav;