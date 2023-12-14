
import RestroCard from './RestroCard';
import {restoList} from '../utils/mockdata';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
const Body = () =>{
const [restaurantList, setRestaurantList] = useState([])
const [filterResList, setfilterResList] = useState([]);
const [searchItem, setSearchItem] = useState("");

useEffect(()=>{
 
fetchData();
},[])

const  fetchData = async() =>{
    const response1 =  await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const reponse2 = await response1.json();
    setRestaurantList(reponse2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterResList(reponse2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


return restaurantList.length === 0 ? <Shimmer></Shimmer> : (
        <div className="body-container">
            <div className="filter">
                <input type='text' value={searchItem} onChange={(e)=>{
                        setSearchItem(e.target.value);
                }}></input>
                <button className='search' onClick={(e)=>{
                   const searchList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchItem.toLowerCase()))
                   setfilterResList(searchList);
                }}>Search</button>
                <button onClick={()=>{
                   const filter =  restaurantList.filter((res)=> res.info.avgRating > 4) 
                    setRestaurantList(filter);
                }}>Give me a rated Resto</button>
            </div>
            <div className="res-Container">
                {filterResList.map((restaurant,index) => {
                     return  <Link className='lineRemove' key={restaurant.info.id} to={"/Restaurant/" + restaurant.info.id} ><RestroCard restau={restaurant.info}/></Link>;
                })}
            </div>
        </div>
    )
  }

export default Body;