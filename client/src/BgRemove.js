import React from "react";
import close from "./assets/close.png";
import uplaod from "./assets/Upload.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import original from "./assets/Image.png";
import terms from "./assets/eula.png";
import noBackground from "./assets/Cleanup Edges.png";
import "./BgRemove.scss";
import Card from "./shared/Card";
import MiddleCard from "./shared/MiddleCard";

const BigRemove = () => {
  return (
    <div className="bg_cont">
      <div className="bg_header">
        <img src={close} className="close_img" alt="close" />
        <div className="bg_header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <div className="sub_cont">
          <button className="bg_header_button">
            <img src={uplaod} alt="upload" />
            <span>העלאת תמונה</span>
          </button>
          <div className="bg_header_subtext">png, jpeg :פורמטים נתמכים</div>
        </div>
      </div>

      <div className="main_cont">
        <Card className="main_card_left">
          <div className="tab_button_original">
            <span>מקורי</span>
            <img className="original" src={original} alt="original" />
          </div>
          <div className="tab_button_no_bg">
            <span>הוסר רקע</span>
            <img
              className="noBackground"
              src={noBackground}
              alt="noBackground"
            />
          </div>
          <MiddleCard className="main_card_middle"></MiddleCard>
          <div className="main_left_footer">
            <button className="main_left_footer_btn">
              <img src={terms} alt="terms" />
              <span>תקנון החברה</span>
            </button>
            <div className="main_left_footer_text">
              על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן על
              ידי וחלים מדיניות הפרטיות ותנאי השירות שלו.
            </div>
          </div>
        </Card>
        <Card className="main_card_right">
          <MiddleCard className="main_card_middle"></MiddleCard>
        </Card>
      </div>

      <div className="footer_cont">
        <img className="logo" src={logo} alt="logo" />
        <a
          className="banner_link"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="banner_img" src={banner} alt="banner" />
        </a>
      </div>
    </div>
  );
};

export default BigRemove;
