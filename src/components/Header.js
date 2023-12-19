import { useEffect, useState, useContext } from "react";
import { CDN_LOGO } from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [loginBtn,  setLoginBtn] = useState("login")
    const {loggedInuser} = useContext(UserContext);
    console.log(loggedInuser);
    const onLineStatus = useOnlineStatus();
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
                    <li className="m-4" ><Link className="lineRemove" to="/">Home </Link></li>
                    <li className="m-4"><Link className="lineRemove" to="/about">About</Link></li> 
                    <li className="m-4"><Link className="lineRemove" to="/contact">Contact us</Link></li>
                    <li className="m-4"><Link className="lineRemove" to="/grocery">Grocery</Link></li>
                    <li className="m-4">Cart</li>
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