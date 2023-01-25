import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";

const loggedInUser = () =>{
//api to authenticate
return false;
}

const Title = () => (
    <a href="/">
        <img
            alt="logo"
            className="logo"
            src={Logo}
        />
    </a>
);

 const Header = () => {
     const [isLoggedIn, setIsLoggedIn]= useState(false);
     return(
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {
                 (isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
    </div>
     );
    }; 

export default Header;