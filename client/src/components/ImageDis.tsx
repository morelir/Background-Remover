import React, { useEffect, useRef, useState } from "react";
import "./ImageDis.scss";
import warning from "../assets/warning.png";
import { createApiClient } from "../core/api";
import CircularProgress from "@mui/material/CircularProgress";

function generateCacheBust() {
  return `cacheBust=${Date.now()}`;
}

const api = createApiClient();

const ImageDis: React.FC<{
  isLoading?: boolean;
  setUploadedImgNoBg?: (data: string) => void;
  uploadedImg: string | undefined;
  imgOnly?: boolean;
}> = (props) => {
  const colorInputRef = useRef<HTMLInputElement | null>(null);
  const [color, setColor] = useState<string>();
  const [cacheBust, setCacheBust] = useState(generateCacheBust());
  const [isLoading, setIsLoading] = useState(props.isLoading);

  useEffect(() => {
    setIsLoading(props.isLoading);
  }, [props.isLoading]);

  const btnColorHandler = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const inputColorChange = () => {
    if (colorInputRef.current) {
      setColor(colorInputRef.current.value);
    }
  };

  const confirmColorHandler = async () => {
    if (props.uploadedImg && color) {
      const formData = new FormData();
      formData.append("filename", props.uploadedImg);
      formData.append("color", color);
      try {
        setIsLoading(true);
        const response = await api.postUploadImgWithBgColor({
          filename: props.uploadedImg,
          color: color,
        });
        props.setUploadedImgNoBg?.(response.data.uploadedImageBgColor);
        setCacheBust(generateCacheBust());
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="img_display_cont">
      <div
        className="img_display_subcont"
        style={{
          // visibility:
          //   !props.imgOnly && props.uploadedImg ? "visible" : "hidden",
        }}
      >
        <p className="subcont_text">
          <img src={warning} alt="warning" />
          <span>
            אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
          </span>
        </p>
        <button
          className="color_btn"
          onClick={btnColorHandler}
        >
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

        <button
          className="confirm_color_btn"
          disabled={!color}
          onClick={confirmColorHandler}
        >
          החל שינויים
        </button>
      </div>

      <div className="image_place">
        {isLoading && (
          <CircularProgress
            size={60}
            sx={{
              color: "#0889ce",
            }}
          />
        )}
        {props.uploadedImg && !isLoading && (
          <img
            className="uploaded_img"
            src={`${process.env.REACT_APP_BACKEND_URL}/${props.uploadedImg}?${cacheBust}`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ImageDis;
