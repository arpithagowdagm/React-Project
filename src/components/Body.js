
import RestroCard,{WithLabelRestroCard} from './RestroCard';
import {useState, useContext } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantList from '../utils/useRestaurantList';
import UserContext from '../utils/UserContext';
const Body = () =>{
const [restaurantList, setRestaurantList, filterResList, setfilterResList] = useRestaurantList();
const [searchItem, setSearchItem] = useState("");

const onLineStatus = useOnlineStatus();
const {loggedInuser, setUserName} = useContext(UserContext);

const WithOfferlabel = WithLabelRestroCard(RestroCard);


/* useEffect(()=>{
 
fetchData();
},[])

const  fetchData = async() =>{
   try{
    const response1 =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const reponse2 = await response1.json();
    setRestaurantList(reponse2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterResList(reponse2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
catch(error){
    console.error('Swiggy Api',error);
}
} */

if (onLineStatus === false)
  return (
    <h1>
      Looks like you're offline!! Please check your internet connection;
    </h1>
  );

return restaurantList.length === 0 ? <Shimmer></Shimmer> : (
        <div className="m-5">
            <div className="flex justify-start">
                <input type='text' className='border m-3 rounded-lg' value={searchItem} onChange={(e)=>{
                        setSearchItem(e.target.value);
                }}></input>
                <button className='bg-gray-400 px-2 py-1 text-xs my-3 items-center rounded-lg' onClick={(e)=>{
                   const searchList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchItem.toLowerCase()))
                   setfilterResList(searchList);
                }}>Search</button>
                <button className=" m-3 bg-blue-400 items-center rounded-lg px-2 py-1" onClick={()=>{
                   const filter =  restaurantList.filter((res)=> res.info.avgRating > 4.4) 
                   setfilterResList(filter);
                }}>Rated Restaurant </button>
                <input type='text' className='border m-3 rounded-lg' value={loggedInuser} onChange={(e)=>{
                        setUserName(e.target.value);
                }}></input>
            </div>
            <div className="flex flex-wrap">
                {filterResList.map((restaurant,index) => {
                     return  <Link className='flex-wrap' key={restaurant.info.id} to={"/Restaurant/" + restaurant.info.id} >
                      {restaurant.info.aggregatedDiscountInfoV3 && Object.keys(restaurant.info.aggregatedDiscountInfoV3).length ?  (<WithOfferlabel restau={restaurant.info}/>) : (<RestroCard restau={restaurant?.info}/>) }
                      </Link>;
                })}
            </div>
        </div>
    )
  }

export default Body;