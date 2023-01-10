// import React from "react";
const headings = React.createElement("h1", {
    id: "title"
}, "Namaste React Everyone");
const heading2 = React.createElement("h2", {
    id: "title"
}, "heading2");
console.log(headings);
const container = React.createElement("div", {
    id: "container"
}, [
    headings,
    heading2
] // children 
);
const roots = ReactDOM.createRoot(document.getElementById("root"));
// passing a react Element inside the root
//  roots.render(headings);
roots.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
