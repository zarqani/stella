import axios from "axios";

const API_URL = "http://localhost:3001";

export const register = (newUser) => {
  return axios
    .post(`${API_URL}/users/register`, {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log(res, "res");
    });
};

export const login = (user) => {
  return axios
    .post(`${API_URL}/users/login`, {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
