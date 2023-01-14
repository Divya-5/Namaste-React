import React from "react";
import ReactDOM from "react-dom/client";
/*
    Header
     - Logo
     - NavItem(Right Side)
     - Cart
    Body
      - Search Bar
      - Restaurant List
        - Restaurant Card
          -Image
          -Name
          -Rating
          -Cusinies
    Footer
      - Links
      - CopyRight
     */
const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />
  </a>
);
const styleObj={
  backgroundColor:"red"
}
//INLINE STYLE IN REACT - style={styleObj} or style={{ backgroundColor:"red"}}
const Header = () => (
  <div className="header" style={styleObj}>
    <Title />
    <div className="nav-items" style={{ backgroundColor:"red"}}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const Body = () => {
  return (
    <h4>Body</h4>
  );
}
const Footer = () => {
  return (
    <h4>Footer</h4>
  );
}
//Either use   <> or <React.Fragment>
const AppLayout = () => {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react Element inside the root
//ASYNC DEFER
root.render(Title);
//rendering a component
root.render(<Header />);
