import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = <h1>Namaste React</h1>;
//both exactly same we can skip return but for multiple lines we need paranthesis but for single line we dont need paranthesis
const HeaderComponentSingle = () => {
  return  <div> <h1>Namaste React</h1></div>
};
const HeaderComponentMultiple = function() {
  return (
    <div>
      <h1>Namaste React</h1> <h2>Namaste JS</h2>
    </div>
  );
};
const HeaderComponent2 = () => (
    <div>
      <h1>Namaste React</h1> <h2>Namaste JS</h2>
    </div>
  );

const roots = ReactDOM.createRoot(document.getElementById("root"));
// passing a react Element inside the root
//  roots.render(headings);
//ASYNC DEFER
roots.render(heading2);
