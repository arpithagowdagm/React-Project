import {CDN_CARD} from '../utils/constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const RestroCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla, abc} = props?.restau;
    const data = useContext(UserContext);
     return (
         <div className="m-3 p-2 bg-gray-300 w-52 rounded-lg">
              <img className="w-60 rounded-lg" alt="res" src={CDN_CARD+ cloudinaryImageId}></img>
              <h3 className='font-bold'>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating}</h4>
              <h4>{sla.deliveryTime} Min</h4>
              <h4>{data.loggedInuser}</h4>
           </div>
     )
   }


  export const WithLabelRestroCard = (RestroCard) => {

    return (props)=>{
       return (
              <div>
                  <label className='absolute bg-black text-white rounded-lg mx-4 px-3' >{props.restau.aggregatedDiscountInfoV3.header}</label>
                  <RestroCard {...props}/>
              </div>)
  }

  }
export default RestroCard;