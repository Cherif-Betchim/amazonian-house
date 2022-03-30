import React from "react";
import logo from "../assets/leaf.png"
import "../styles/banner.css"
function Banner(){
    const title = "Amazonian house shop"
    return(
        <div className={"lmj-banner"}>
                <img src={logo} className={"lmj-logo"}/>
                <h1 className={"lmj-title"}> {title}</h1>
        </div>
    )
}


export default Banner;