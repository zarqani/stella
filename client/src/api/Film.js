import axios from "axios";
import {
  FILMS_API,
  FILM_API,
  FILMPEOPLE_FILM_API,
  SEASON_FILM_API,
} from "../constants/api";

export const postFilm = (data) => {
  const url = FILMS_API();
  return axios.post(url, data).then((res) => {
    return res.data;
  });
};

export const getFilms = () => {
  const url = FILMS_API();
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getFilm = (id) => {
  const url = FILM_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const geFilmtSeasons = (id) => {
  const url = SEASON_FILM_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const getFilmpeopleFilm = (id) => {
  const url = FILMPEOPLE_FILM_API(id);
  return axios.get(url).then((res) => {
    return res.data;
  });
};

export const putFilm = (id, data) => {
  const url = FILM_API(id);
  return axios.put(url, data).then((res) => {
    return res.data;
  });
};

export const deleteFilm = (id) => {
  const url = FILM_API(id);
  return axios.delete(url).then((res) => {
    return res.data;
  });
};
