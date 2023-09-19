import axios from "axios";
import { UploadImage, UploadImageBgColor } from "./types";

export type UploadImageResponseData = {
  status: string;
  data: UploadImage;
};

export type UploadImageBgColorResponseData = {
  status: string;
  data: UploadImageBgColor;
};

export type ApiClient = {
  postUploadImg: (data: FormData) => Promise<UploadImageResponseData>;
  postUploadImgWithBgColor: (data: {
    filename: string;
    color: string;
  }) => Promise<UploadImageBgColorResponseData>;
};

export const createApiClient = (): ApiClient => {
  return {
    postUploadImg: (data) => {
      return axios
        .post(`http://localhost:5000/upload-img`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    postUploadImgWithBgColor: (data) => {
      
      return axios
        .post(`http://localhost:5000/upload-img/bg-color`, data
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
  };
};
