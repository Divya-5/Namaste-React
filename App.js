import React from 'react';
import ReactDOM from 'react-dom/client';

const headings = React.createElement(
  "h1",
  {
    id: "title",
    key:"h1",
  },
  "Namaste React Everyone"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
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
