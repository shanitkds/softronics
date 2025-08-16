import React from "react";
import Logo from "./symbol.png";
import "./main.css"



const Main=()=>{

    return(
        <div>
        <div className="main-div">
            <img src={Logo} className="imd-main"/>
            <h1>React</h1>
           <h3> The library for web and native user interfaces</h3>
           <div className="btn">
            <button className="btn1">Learn React</button>
            <button className="btn2">API Reference</button>
           </div>
        </div>
        
     </div>
    )
}

export default Main