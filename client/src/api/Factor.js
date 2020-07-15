import axios from "axios";
import { FACTORS_API, FACTOR_API } from "../constants/api";

export const postFactors = (data) => {
  const url = FACTORS_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getFactors = () => {
  const url = FACTORS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getFactor = (id) => {
  const url = FACTOR_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putFactor = (id, data) => {
  const url = FACTOR_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteFactor = (id) => {
  const url = FACTOR_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
