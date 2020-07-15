import axios from "axios";
import { SUBSCRIPTIONS_API, SUBSCRIPTION_API } from "../constants/api";

export const postPackageList = (data) => {
  const url = SUBSCRIPTIONS_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getPackageList = () => {
  const url = SUBSCRIPTIONS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getPackage = (id) => {
  const url = SUBSCRIPTION_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putPackage = (id, data) => {
  const url = SUBSCRIPTION_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deletePackage = (id) => {
  const url = SUBSCRIPTION_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
