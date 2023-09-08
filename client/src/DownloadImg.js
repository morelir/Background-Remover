import React, { useState } from "react";
import "./DownloadImg.scss";
import check from "./assets/check.png";
import newImg from "./assets/new.png";
import notRobot from "./assets/not_robot.png";
import downloadFolder from "./assets/Downloads Folder.png"
import Modal from "./shared/Modal";

const DownloadImg = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="downloadImg_cont">
        <header className="downloadImg_title">
          {props.new && <img src={newImg} alt="new" />}
          <span>{props.title}</span>
        </header>
        <div className="downloadImg_subtitle">{props.subtitle}</div>
        <button onClick={openPopup} className="downloadImg_button">
          {props.buttonText}
        </button>
        <div className="downloadImg_subsubtext">
          <img src={check} alt="check" />
          <span>{props.subsubtext}</span>
        </div>
      </div>

      <Modal
        className="download_popup"
        show={showPopup}
        onCancel={closePopup}
        header="אישור להורדת תמונה"
        contentClass="download_popup_content"
      >
        <div className="download_img_cont">
        <img className="download_img" src={downloadFolder} alt="download folder"/>
        </div>
        <p className="download_popup_text">האם להוריד את התמונה?</p>
        <div className="notRobot_cont">
          <input type="checkbox" className="notRobot_checkbox" />
          <p>אני לא רובוט</p>
          <img src={notRobot} alt="Not Robot" />
        </div>
        <div className="btns_cont">
          <button className="cancel_btn btn">ביטול</button>
          <button className="approve_btn btn">אישור</button>
        </div>
      </Modal>
    </>
  );
};

export default DownloadImg;
