import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  //USESTATE HOOK
  //searchTxt is a local state variable
  //destructing
  const [searchInput, setsearchInput] = useState("KFC"); //returns [variable name, function to update the state variable]
  const [searchClick, setsearchClick] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value); // this will not work
          }}
        />
        <h1>{searchClick}</h1>
        <button
          className="search-btn"
          onClick={() => {
            if (searchClick==="true"){
              setsearchClick("false");
            }
            else{
            setsearchClick("true");
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
