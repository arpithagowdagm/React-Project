import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = (props) => {
const [menuList,setMenuList] =  useState(null);
const {id} = useParams();
useEffect(()=>{
        getRestaurantItem();
},[])

const getRestaurantItem = async()=> {
    try{
        const RestaurantMenu =  await fetch(MENU_API+id);
        const menu = await RestaurantMenu.json();
        setMenuList(menu.data.cards)
}
catch(error){
    console.error("Menu API",error);
}
}
if(menuList === null) return <Shimmer />

const {name,costForTwoMessage,cuisines} = menuList[0]?.card?.card?.info;
const menu =  menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

        return (
            <div className="restaurantmenu">
                <h2>{name}</h2>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <ul>
                {menu && menu.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price ||  item.card.info.defaultPrice}</li>))}
                
                </ul>

            </div>
        )

}

export default RestaurantsMenu;