import { useSelector,useDispatch } from "react-redux";
import MenuList from './MenuList';
import {clearItem} from '../utils/cartSlice';

const CartItem = () => {
    const dispatch = useDispatch();
    const items = useSelector((store)=>store.cart.items);
    const handleClearCart = () =>{
        dispatch(clearItem())
    }

  return (
    <div className="text-center m-4 p-4">
        <h2 className="text-2xl font-bold">Cart</h2>
        <button className="bg-black text-white rounded-md m-2 p-2" onClick={()=>{handleClearCart()}}>Clear Cart</button>
        <div className="w-6/12 m-auto">
           {items.length ? <MenuList items={items}/> : <h2>Please add a Item to the Cart</h2>}
        </div>
    </div>
  )


}

export default CartItem;