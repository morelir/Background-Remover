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
        .post(`${process.env.REACT_APP_BACKEND_URL}/upload-img`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
    },
    postUploadImgWithBgColor: (data) => {
      return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/upload-img/bg-color`, data)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  };
};
