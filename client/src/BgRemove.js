import React, { useState, useRef } from "react";
import close from "./assets/close.png";
import uplaod from "./assets/Upload.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import original from "./assets/Image.png";
import terms from "./assets/eula.png";
import noBackground from "./assets/Cleanup Edges.png";
import "./BgRemove.scss";
import Card from "./shared/Card";
import DownloadImg from "./DownloadImg";
import ImageDis from "./ImageDis";
import Modal from "./shared/Modal";

const BigRemove = () => {
  const fileInputRef = useRef();
  const [navLinkName, setNavLinkName] = useState("no_bg");
  const [showPopup, setShowPopup] = useState(false);

  const navLinkHandler = (e) => {
    e.preventDefault();
    setNavLinkName(e.currentTarget.id);
  };

  const fileUploadClick = () => {
    fileInputRef.current.click();
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg_cont">
      <div className="bg_header">
        <img src={close} className="close_img" alt="close" />
        <div className="bg_header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <div className="sub_cont">
          <button className="bg_header_button" onClick={fileUploadClick}>
            <img src={uplaod} alt="upload" />
            <span>העלאת תמונה</span>
          </button>
          <input ref={fileInputRef} type="file" style={{ display: "none" }} />
          <div className="bg_header_subtext">png, jpeg :פורמטים נתמכים</div>
        </div>
      </div>

      <div className="main_cont">
        <Card className="main_card_left">
          <nav className="nav_tabs">
            <a
              className={`nav_link ${navLinkName === "original" && "active"}`}
              id="original"
              href="/"
              onClick={navLinkHandler}
            >
              <span>מקורי</span>
              <img src={original} alt="original" />
            </a>
            <a
              className={`nav_link ${navLinkName === "no_bg" && "active"}`}
              id="no_bg"
              href="/"
              onClick={navLinkHandler}
            >
              <span>הוסר רקע</span>
              <img src={noBackground} alt="noBackground" />
            </a>
          </nav>
          {navLinkName === "no_bg" ? <ImageDis /> : <ImageDis imgOnly />}

          <div className="main_left_footer">
            <button className="main_left_footer_btn" onClick={openPopup}>
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
          <DownloadImg
            title="תמונה חינם"
            subtitle="תצוגה מקדימה של תמונה 612x408"
            buttonText="הורד"
            subsubtext="איכות טובה עד 0.25 מגה פיקסל"
          />
          <DownloadImg
            title="Pro"
            subtitle="תצוגה מקדימה של תמונה 1280x1920"
            buttonText="הורד HD"
            subsubtext="איכות הטובה ביותר עד 25 מגה פיקסל"
            new
          />
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

      <Modal
        className="takanon_popup"
        show={showPopup}
        onCancel={closePopup}
        header="תקנון"
      >
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
        סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס
        איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
        וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר
        בריקנה סטום, לפריקך תצטריק לרטי.
      </Modal>
    </div>
  );
};

export default BigRemove;
