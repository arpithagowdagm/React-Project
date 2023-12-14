import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import {Link} from 'react-router-dom';
const Header = () => {
    const [loginBtn,  setLoginBtn] = useState("login")

    useEffect(()=>{
    },[loginBtn])

    return(
        <div className="header">
            <div className="logo-container">
            <img alt="logo" className="logo" src={CDN_LOGO}></img>
            </div>
            <div className="nav-item">
                 <ul>
                    <li><Link className="lineRemove" to="/">Home</Link></li>
                    <li><Link className="lineRemove" to="/about">About</Link></li> 
                    <li><Link className="lineRemove" to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={()=>{
                        loginBtn == "login" ? setLoginBtn("logout") : setLoginBtn("login")
                    }}>{loginBtn}</button>
                 </ul>
            </div>
        </div>
    )
}

export default Header;