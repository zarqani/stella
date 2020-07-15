import axios from "axios";
import { UPLOADS_API, UPLOAD_API } from "../constants/api";
import { API_URL } from "../env";

export const postUpload = (data) => {
  const url = UPLOADS_API();

  // const data = new FormData();
  // data.append("file", e.target.files[0]);
  // console.log(data, "data111111111111");
  // data.set("name", e.target.files[0].name);

  console.log(data, "data22");
  const formData = new FormData();
  formData.append("file", data);
  formData.set("name", data.name);
  const contentType = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  return axios.post(url, formData, contentType).then((res) => {
    return res.data;
  });
};

export const getUploads = () => {
  const url = UPLOADS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getUpload = (id) => {
  const url = UPLOAD_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putUpload = (id, data) => {
  const url = UPLOAD_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteUpload = (id) => {
  const url = UPLOAD_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};

axios({
  method: "post",
});
