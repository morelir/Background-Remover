import React, { useRef, useState } from "react";
import "./ImageDis.scss";
import warning from "./assets/warning.png";

const ImageDis = (props) => {
  const colorInputRef = useRef();
  const [color, setColor] = useState();

  const btnColorHandler = () => {
    colorInputRef.current.click();
  };

  const inputColorChange = () => {
    setColor(colorInputRef.current.value);
  };

  return (
    <div className="img_display_cont">
      {!props.imgOnly && (
        <div className="img_display_subcont">
          <p className="subcont_text">
            <img src={warning} alt="warning" />
            <span>
              אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
            </span>
          </p>
          <button className="color_btn" onClick={btnColorHandler}>
            <span>צבע רקע</span>
            <div className="color_choose" style={{ backgroundColor: color }} />
            <input
              className="color_input"
              type="color"
              ref={colorInputRef}
              value="#d4d4d4"
              onChange={inputColorChange}
            />
          </button>
        </div>
      )}

      <div className="image_place"></div>
    </div>
  );
};

export default ImageDis;
