const axios = require("axios");
export const APIURL = "http://localhost:3000";
export const getPhotos = () => axios.get(`${APIURL}/photos`);
export const addPhoto = (data) =>
  axios({
    method: "post",
    url: `${APIURL}/photos/add`,
    data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  });
export const editPhoto = (data) =>
  axios({
    method: "put",
    url: `${APIURL}/photos/edit`,
    data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  });
export const deletePhoto = (id) =>
  axios.delete(`${APIURL}/photos/delete/${id}`);
