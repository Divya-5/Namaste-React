import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //api to authenticate
  return false;
};

const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
                  <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
                  <Link to="/contact">
          <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
