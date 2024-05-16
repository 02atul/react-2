import { useState } from "react";
import {URL_LOGO} from "../utilis/constant"
const Header = () => {
    const [btnName,setBtnName] = useState("Login") 
    console.log("head");

    useState(()=>{
        console.log("useeffct");
    } , [])
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={URL_LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                     <button className="login" onClick={()=>{
                        btnName === "Login"?
                        setBtnName("Logout"):
                        setBtnName("Login");
                     }}>
                        {btnName}
                     </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;