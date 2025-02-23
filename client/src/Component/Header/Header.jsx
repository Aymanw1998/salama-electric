import React from 'react';
import name from "../../images/name.png"
import logo from "../../images/icon.png"
import "./Header.css"

const Header = () => {
	return (
        <header dir="ltr">
            <div className='System'>
            <img className ="nameSystem" src={name} alt="NAME SYSTEM" />
                <img className ="logoSystem" src={logo} alt="LOGO SYSTEM" />
            </div>
        </header>
	);
}

export default Header;