import React from "react";

const Hero = ({imageSrc}) =>{
    return <div className="hero">
        <img src={imageSrc} alt="cargoship" className="hero_image"></img>
        <h1 className="hero_title"></h1>
    </div>
}