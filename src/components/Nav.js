import logo from "./LittleLemonLogo.png";

function Nav() {
    return(
        <nav>
            <img height="50" src={logo} alt="logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-me">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="reservations">Reservations</a></li>
                <li><a href="orderOnline">Order Online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;