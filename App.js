// import React from "react";

const headings = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste React Everyone"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading2"
);
console.log(headings);
const container = React.createElement(
  "div",//tag-name
  {
    id: "container", //attribute in react called props
  },
  [headings, heading2]// children 
);
const roots = ReactDOM.createRoot(document.getElementById("root"));
// passing a react Element inside the root
//  roots.render(headings);
roots.render(container);
