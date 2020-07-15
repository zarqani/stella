import axios from "axios";
import {
  CATEGORIES_API,
  CATEGORY_API,
  CATEGORY_FILM_API,
} from "../constants/api";

export const postCategory = (data) => {
  const url = CATEGORIES_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getCategories = () => {
  const url = CATEGORIES_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getCategoryFilms = (id) => {
  const url = CATEGORY_FILM_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getCategory = (id) => {
  const url = CATEGORY_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putCategory = (id, data) => {
  const url = CATEGORY_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteCategory = (id) => {
  const url = CATEGORY_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
