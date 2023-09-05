import React from "react";
import close from "./assets/close.png";
import "./BgRemove.css";

const BigRemove = () => {
  return (
    <div className="bg_cont">
      <div className="bg_header">
        <img src={close} className="close_img" />
        <div className="bg_header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <div className="bg_header_second_subdiv">
          <button className="bg_header_button">העלאת תמונה</button>
          <div className="bg_header_subtext">png, jpeg :פורמטים נתמכים</div>
        </div>
      </div>
    </div>
  );
};

export default BigRemove;
