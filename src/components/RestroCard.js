import {CDN_CARD} from '../utils/constants';
const RestroCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla, abc} = props?.restau;
     return (
         <div className="resto-card" style={{backgroundColor: "#f0f0f0"}}>
              <img className="resto-logo" alt="res" src={CDN_CARD+ cloudinaryImageId}></img>
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating}</h4>
              <h4>{sla.deliveryTime} Min</h4>
           </div>
     )
   }
export default RestroCard;