import React from "react";
import "./BgRemove.css"

const BigRemove = () => {
  return (
    <div className="bg_div_cont">
      <div className="bg_div_header">
        <div className="bg_div_title">העלאת תמונה כדי להסיר את הרקע</div>
        <button className="bg_header_button">העלאת תמונה</button>
        <div>פורמטים נתמכים png, jpeg</div>
      </div>
    </div>
  );
};

export default BigRemove;
