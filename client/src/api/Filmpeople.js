import axios from "axios";
import { FILMPEOPLES_API, FILMPEOPLE_API } from "../constants/api";

export const postFilmpeople = (data) => {
  const url = FILMPEOPLES_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getFilmpeoples = () => {
  const url = FILMPEOPLES_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getFilmpeople = (id) => {
  const url = FILMPEOPLE_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putFilmpeople = (id, data) => {
  const url = FILMPEOPLE_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteFilmpeople = (id) => {
  const url = FILMPEOPLE_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
