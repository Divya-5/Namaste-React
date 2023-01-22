import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  //USESTATE HOOK
  //searchTxt is a local state variable
  //destructing
  const [allRestaurants,setAllRestaurants]= useState([]);
  const [searchText, setSearchText] = useState(""); //returns [variable name, function to update the state variable]
  // const [searchClick, setSearchClick] = useState("false");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log(render);

  //Conditional Rendering
//if restaurant is empty => shimmer ui
// if restaurant has data => actual data UI
  return (allRestaurants.length === 0 ) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); // this will not work
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            //update  the state- restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
