import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constants";
const useRestaurantsMenu = (resId) =>{
const [resInfo, setResInfo] = useState(null);
useEffect(()=>{
        fetchData();
},[])

const fetchData = async () =>{
    try{
        const response = await fetch(MENU_API+resId);
        const menu = await response.json();
        setResInfo(menu.data.cards);
}
catch(error){
        console.error('error from useRestaurantsMenu',error);
}
}


    return resInfo;
}

export default useRestaurantsMenu;