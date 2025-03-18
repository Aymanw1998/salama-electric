import React from 'react';
import { useMediaQuery } from '@mui/material';
import "./About.css"

import Card from "../Card/Card"

import I1 from "../../images/proj-images/image1.jpeg"
import I2 from "../../images/proj-images/image4.jpeg"
import I3 from "../../images/I3.jpeg"
import I4 from "../../images/I4.jpg"
import I5 from "../../images/I5.jpg"
import I6 from "../../images/I6.jpg"
import I7 from "../../images/I7.jpg"
import I8 from "../../images/I8.jpg"
import I9 from "../../images/I9.jpg"
import I10 from "../../images/I10.jpg"

import CALL from "../../images/call.png"
import WHATSAPP from "../../images/Whatsapp.png" 
import INSTAGRAM from "../../images/instagram.png"
import FACEBOOK from "../../images/facebook.png"

import LOGO from "../../images/icon.png"
const phoneNumber = "+972528948881"
const services = [
    {
        title: "איתור קצרים",
        image: I1,
    },
    {
        title: "החלפת לוחות חשמל",
        image: I2,
    },
    {
        title: "הגדלות מול חברת חשמל",
        image: I3,
    },
    {
        title: "ביקורת חברת חשמל",
        image: I4,
    },
    {
        title: "התקנת גופי תאורה",
        image: I5,
    },
    {
        title: "הוספת נקודות חשמל",
        image: I6,
    },
    {
        title: "ביצוע כל עבודות החשמל",
        image: I7,
    },
    {
        title: "התקנת עמדות עבודה חשמליות",
        image: I8,
    },
    {
        title: "התקנת עמדות טעינה לרכבים חשמליים",
        image: I9,
    },
    {
        title: "ידע חשמל תעשייתי",
        image: I10,
    },
    
]
const About = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            {/* <img className="bg-image" src={Background}/> */}
            <br/>
            <div className="bg-text">
                {isMobile && <img src={LOGO} className="logo" alt=""/>}
                <h1>SALAMA <span style={{color: "yellow"}}>ELECTRIC</span></h1>
                <h2>חשמלאי מוסמך</h2>
                <h2>חשמל ביתי ולוחות חשמל</h2>
                <Card/>
                <h2>מספר רישיון <b style={{color: "yellow"}}>1004425</b></h2>
                <h2>{"<מקצועיות, אמינות>"}</h2>
                <h2>עובדים באיזור המרכז</h2>
                <h1 style={{textAlign: "center", color: "yellow" }}>נתקלת בתקלת חשמל? אנחנו כאן לשירותכם</h1>
                <br/>
            <div className="buttons-wrapper">
                <a href={`tel:${phoneNumber}`} className="call-button" aria-label="התקשר עכשיו">
                    <img src={CALL} alt="Call" />
                </a>
                <a href={`https://wa.me/${phoneNumber}`} className="call-button" target="_blank" rel="noopener noreferrer" aria-label="שלח הודעה בוואטסאפ">
                    <img src={WHATSAPP} alt="WhatsApp" />
                </a>
            
                <a href={`https://instagram.com/muhamad_9807`} className="call-button" aria-label="התקשר עכשיו">
                    <img src={INSTAGRAM} alt="Call" />
                </a>
                <a href={`https://facebook.com/1593044809`} className="call-button" target="_blank" rel="noopener noreferrer" aria-label="שלח הודעה בוואטסאפ">
                    <img src={FACEBOOK} alt="WhatsApp" />
                </a>
            </div>
            </div>
            <h1 style={{textAlign: "center", color: "yellow" }}>השירותים שאנו מציעים</h1>
            <div className="service-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt="service" />
                        <div className="service-overlay">
                            <h2 className="service-title">{service.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}

export default About;
