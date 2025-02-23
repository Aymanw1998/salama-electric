import React from "react";
import PROFILE from "../../images/mohamad.jpeg"
import "./Card.css";

const Card = () => {
  return (
    <div className="image-card">
      <img src={PROFILE} alt={"מוחמד סלאמה"} className="image" />
      <div className="content">
        <h3 className="name">{"מוחמד סלאמה"}</h3>
      </div>
    </div>
  );
};

export default Card;
