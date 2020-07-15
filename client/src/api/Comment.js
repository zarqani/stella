import axios from "axios";
import { COMMENTS_API, COMMENT_API } from "../constants/api";

export const postComment = (data) => {
  const url = COMMENTS_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getComments = () => {
  const url = COMMENTS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getComment = (id) => {
  const url = COMMENT_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putComment = (id, data) => {
  const url = COMMENT_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteComment = (id) => {
  const url = COMMENT_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
