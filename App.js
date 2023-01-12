import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="title">
    Namaste React Element
  </h1>
  );
//both exactly same we can skip return but for multiple lines we need paranthesis but for single line we dont need paranthesis
const HeaderComponentSingle = () => {
  return (
    <div>
      <h1>Namaste React</h1>
    </div>
  );
};
//use react element inside the react component
//both are same    <Title /> {Title()} called as function as well 
//Composing Components- Passing components inside components
const HeaderComponentMultiple = function () {
  return (
    <div>
      <Title /> {Title()}
        <h1>Namaste React functional component</h1>
        <h2>Namaste JS</h2>
    </div>
  );
};
const HeaderComponent2 = () => (
  <div>
    <h1>Namaste React</h1> <h2>Namaste JS</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react Element inside the root
//ASYNC DEFER
root.render(Title);
//rendering a component
root.render(<HeaderComponentMultiple />);
