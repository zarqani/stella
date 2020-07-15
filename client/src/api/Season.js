import axios from "axios";
import {
  SEASONS_API,
  SEASON_API,
  SEASON_FILM_API,
  FILM_SEASON_API,
} from "../constants/api";

export const postSeason = (data) => {
  const url = SEASONS_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getSeasons = () => {
  const url = SEASONS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getSeasonsFilm = (id) => {
  const url = FILM_SEASON_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getSeason = (id) => {
  const url = SEASON_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putSeason = (id, data) => {
  const url = SEASON_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteSeason = (id) => {
  const url = SEASON_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
