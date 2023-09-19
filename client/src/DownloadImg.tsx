import React, { useState } from "react";
import "./DownloadImg.scss";
import check from "./assets/check.png";
import newImg from "./assets/new.png";
import notRobot from "./assets/not_robot.png";
import downloadFolder from "./assets/Downloads Folder.png";
import Modal from "./shared/Modal";

const DownloadImg: React.FC<{
  filename?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  subsubtext: string;
  new?: boolean;
}> = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const resetStates = ()=>{
    setCheckboxChecked(false);
  }

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    resetStates();
    setShowPopup(false);
  };

  const downloadImg = () => {
    fetch(`http://localhost:5000/${props.filename}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = props.filename as string;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        closePopup();
      })
      .catch((error) => console.log(error));
  };


  return (
    <>
      <div className="downloadImg_cont">
        <header className="downloadImg_title">
          {props.new && <img src={newImg} alt="new" />}
          <span>{props.title}</span>
        </header>
        <div className="downloadImg_subtitle">{props.subtitle}</div>
        <button
          disabled={!props.filename}
          onClick={openPopup}
          className="downloadImg_button"
        >
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
          <img
            className="download_img"
            src={downloadFolder}
            alt="download folder"
          />
        </div>
        <p className="download_popup_text">האם להוריד את התמונה?</p>
        <div className="notRobot_cont">
          <input
            type="checkbox"
            className="notRobot_checkbox"
            onChange={() => setCheckboxChecked(!checkboxChecked)}
          />
          <p>אני לא רובוט</p>
          <img src={notRobot} alt="Not Robot" />
        </div>
        <div className="btns_cont">
          <button className="cancel_btn btn" onClick={closePopup}>ביטול</button>
          <button className="approve_btn btn" onClick={downloadImg} disabled={!checkboxChecked}>
            אישור
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DownloadImg;
