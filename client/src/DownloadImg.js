import React from "react";
import "./DownloadImg.scss";
import check from "./assets/check.png";
import newImg from "./assets/new.png";

const DownloadImg = (props) => {
  return (
    <div className="downloadImg_cont">
      <header className="downloadImg_title">
        {props.new && <img src={newImg} alt="new" />}
        <span>{props.title}</span>
      </header>
      <div className="downloadImg_subtitle">{props.subtitle}</div>
      <button className="downloadImg_button">{props.buttonText}</button>
      <div className="downloadImg_subsubtext">
        <img src={check}  alt="check" />
        <span>{props.subsubtext}</span>
      </div>
    </div>
  );
};

export default DownloadImg;
