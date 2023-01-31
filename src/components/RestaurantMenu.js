import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    //destructure my params
    const { resId } = params;
    //destructure on fly 
    // const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.8466937&lng=80.94616599999999&menuId="+ resId)
    const json=await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    return (!restaurant) ? <Shimmer />: (
        <div>
            <h2>Restaurant id:{resId}</h2> 
        <h2>{restaurant?.name} </h2>
            <img src={IMG_CDN_URL+ restaurant?.cloudinaryImageId}/>
            <h2>{restaurant?.area} </h2>
            <h2>{restaurant?.city} </h2>
            <h2>{restaurant?.avgRating} </h2>
            <h2>{restaurant?.costForTwoMsg} </h2>
            <h1>Menu</h1>
            <ul>
                {
                    Object.values(restaurant?.menu?.items).map((item)=> (<li key={item.id}>{item.name}</li>))
                }
            </ul>
        </div >
    );
};

export default RestaurantMenu;