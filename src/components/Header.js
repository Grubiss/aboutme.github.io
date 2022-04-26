import React from "react";
import photo from "../images/photo.jpg"

function Header() { 
    return(
        <header className="Header">
           <img className="photo" src={photo} alt='my_photo'></img> 
        </header>
    )
}

export default Header