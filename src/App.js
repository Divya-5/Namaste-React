import React from "react";
import ReactDOM from "react-dom/client";
// import * as XYZ from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./components/About"

const AppLayout = () => {
  return (
    <>
      {/* <XYZ.Header /> */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  { path:"/", 
 element:<AppLayout/>
},
  { path:"/about", 
  element:<About/>
}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
