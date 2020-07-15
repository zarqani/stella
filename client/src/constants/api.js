import { API_URL } from "../env";

// CATEGORY
export const CATEGORIES_API = () => `${API_URL}/category`;
export const CATEGORY_API = (id) => `${API_URL}/category/${id}`;
export const CATEGORY_FILM_API = (id) => `${API_URL}/category/films/${id}`;

// COMMENT
export const COMMENTS_API = () => `${API_URL}/comment`;
export const COMMENT_API = (id) => `${API_URL}/comment/${id}`;

// FACTORS
export const FACTORS_API = () => `${API_URL}/factor`;
export const FACTOR_API = (id) => `${API_URL}/factor/${id}`;

// FILM
export const FILMS_API = () => `${API_URL}/film`;
export const FILM_API = (id) => `${API_URL}/film/${id}`;
export const FILMPEOPLE_FILM_API = (id) => `${API_URL}/film/filmpeople/${id}`;
export const FILM_SEASON_API = (id) => `${API_URL}/film/season/${id}`;

// FILMPEOPLE
export const FILMPEOPLES_API = () => `${API_URL}/filmpeople`;
export const FILMPEOPLE_API = (id) => `${API_URL}/filmpeople/${id}`;

// RATE
export const RATES_API = () => `${API_URL}/rate`;
export const RATE_API = (id) => `${API_URL}/rate/${id}`;

// SEASON
export const SEASONS_API = () => `${API_URL}/season`;
export const SEASON_API = (id) => `${API_URL}/season/${id}`;
export const SEASON_FILM_API = (id) => `${API_URL}/season/films/${id}`;

// SUBSCRIPTIONS
export const SUBSCRIPTIONS_API = () => `${API_URL}/subscriptions`;
export const SUBSCRIPTION_API = (id) => `${API_URL}/subscriptions/${id}`;

// UPLOAD
export const UPLOADS_API = () => `${API_URL}/upload`;
export const UPLOAD_API = (id) => `${API_URL}/upload/${id}`;

// User
// export const LOGIN_POST_API = () => `${API_URL}/auth/local`;
