import axios from "axios";
import { RATES_API, RATE_API } from "../constants/api";

export const postRate = (data) => {
  const url = RATES_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getRates = () => {
  const url = RATES_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getRate = (id) => {
  const url = RATE_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putRate = (id, data) => {
  const url = RATE_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteRate = (id) => {
  const url = RATE_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
