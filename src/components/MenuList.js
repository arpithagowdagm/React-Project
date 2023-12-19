import {CDN_CARD} from '../utils/constants';
const MenuList = ({items})  =>{

        return (
          <div>
          { items.map((item)=> ( 
            <div className="p-2 m-2 border-gray-200 border-b-4 text-left flex justify-between" key={item.card.info.id}> 
                          <div className="w-9/12">
                            <div className="py-2"> 
                            <span>{item.card.info.name}- {item.card.info.price || item.card.info.defaultPrice}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                          </div>
                       <div className="w-3/12 ">    
                            <div className="absolute"><button className=" bg-black text-white rounded-md content-center mx-16 p-2 shadow-lg">Add + </button></div>
                             <img src={CDN_CARD + item.card.info.imageId}/>
                        </div>
                    </div>
              ))
          }
          </div>
        )
      
}

export default MenuList;