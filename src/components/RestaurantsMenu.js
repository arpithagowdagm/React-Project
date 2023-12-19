import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import MenuCategory from "../components/MenuCategory";

const RestaurantsMenu = (props) => {
const [expandColapse, setexpandColapse] = useState(null)
const {id} = useParams();
const menuList = useRestaurantsMenu(id);
if(menuList === null) return <Shimmer />

const {name,costForTwoMessage,cuisines} = menuList[0]?.card?.card?.info;
const menu =  menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=> card?.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
        return (
           
            <div className=" ">
                <div className="justify-center text-center m-3 ">
                <h2 className="font-bold py-4 text-2xl">{name}</h2>
                <p className="">{cuisines.join(", ")} - {costForTwoMessage}</p>
                </div>
                {menu && menu.map((item,index)=> 
                    <MenuCategory key ={item.card.card.title} 
                                  category={item.card.card} 
                                  expandColapse={index === expandColapse ? true :false }
                                  setexpandColapse={()=>{
                                    return setexpandColapse((prevstate)=>{
                                        return prevstate === index ? null : index;
                                    })
                                  }
                                }
                />)}

            </div>
        )

}

export default RestaurantsMenu;