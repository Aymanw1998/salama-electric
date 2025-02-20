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
            <div className="footer-icons">
                <ul>
                {/* <li className='insta'><a href="https://www.instagram.com/jihan_alajo" target="_blank"><img src={instagramIcon} style={{width: `4vw`, maxWidth: "50px", minWidth: "20px", height: "auto"}}/></a></li> */}
                    {/* <li className='tel'><a href="tel:+972547756254" target="_blank"><img src={telIcon} style={{width: `4vw`, maxWidth: "50px", minWidth: "20px", height: "auto"}}/></a></li> */}
                    {/* <li className='wa'><a href="https://wa.me/+972547756254" target="_blank"><img src={whatsappIcon} style={{width: `4vw`, maxWidth: "50px", minWidth: "20px", height: "auto"}}/></a></li>                     */}
                </ul>
            </div>
        </header>
	);
}

export default Header;