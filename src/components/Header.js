import { useEffect, useState, useContext } from "react";
import { CDN_LOGO } from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [loginBtn,  setLoginBtn] = useState("login")
    const {loggedInuser} = useContext(UserContext);
    const onLineStatus = useOnlineStatus();
    const items = useSelector((store)=>store.cart.items);
    useEffect(()=>{
    },[loginBtn])

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
            <img alt="logo" className="w-44" src={CDN_LOGO}></img>
            </div>
            <div className="">
                 <ul className="flex justify-center p-5">
                    <li className="m-4">Online Status is: {onLineStatus? "🟢": "🔴" }</li>
                    <li className="m-4" ><Link to="/">Home </Link></li>
                    <li className="m-4"><Link to="/about">About</Link></li> 
                    <li className="m-4"><Link to="/contact">Contact us</Link></li>
                    <li className="m-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="my-4"><Link to="/cart">Cart</Link></li>
                    <li className="my-4 mr-6 font-bold">({items.length}-Item)</li>
                    <button className="loginBtn" onClick={()=>{
                        loginBtn == "login" ? setLoginBtn("logout") : setLoginBtn("login")
                    }}>{loginBtn}</button>
                    <label className="m-4 font-bold" > {loggedInuser}</label>
                 </ul>
            </div>
        </div>
    )
}

export default Header;