import { useEffect,useState } from "react";
const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterResList, setfilterResList] = useState([])
    useEffect(()=>{
 
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
        }

        return [restaurantList,setRestaurantList, filterResList, setfilterResList];
}


export default useRestaurantList;