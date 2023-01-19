import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard'
const Body = () => {
  let searchText = "KFC";
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
              searchText = e.target.value;// this will not work 
          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          )
        })}
      </div>
    </>
  )
}
export default Body
