import '../App.css';
import logo from "../assets/LittleLemonLogo.png";
import {useEffect, useReducer, useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Confirmation from "./Confirmation";

const initialState = {
    diners: "Number of Diners",
    occasion: "Occasion",
    time: "Time",
};

const reducer = (state, action) => {
    if(action.type === "setDiners") return {...state, diners: action.enter};
    if(action.type === "setOccasion") return {...state, occasion: action.enter};
    if(action.type === "setTime") return {...state, time: action.enter};
    return state;
};

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [fixedNav, setFixedNav] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setFixedNav(window.scrollY > 0);
      };
      window.addEventListener('scroll', handleScroll);
      return() => {
        window.addEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <main>
          <nav className={`navbar ${fixedNav ? 'fixed' : ''}`}>
            <ul onClick={toggleMenu} className={`menu ${isOpen ? 'open' : ''}`}>
              <li><Link to="/" className="link link-home">Home</Link></li>
              <li><Link to="/about" className="link link-about">About</Link></li>
              <li><Link to="/menu" className="link link-menu">Menu</Link></li>
              <li><Link to="/reservations" className="link link-reservations">Reservations</Link></li>
              <li><Link to="/orderOnline" className="link link-orderOnline">Order Online</Link></li>
              <li><Link to="/login" className="link link-login">Login</Link></li>
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
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/reservations" element={<Reservations
            state={state}
            dispatch={dispatch}
            />}
            />
            <Route path="/orderOnline" element={<OrderOnline />}/>
            <Route path="/login" element={<Login />}/>
            <Route path='/confirmation' element={<Confirmation />} />
          </Routes>
        </main>
    );

};

export default Main;

