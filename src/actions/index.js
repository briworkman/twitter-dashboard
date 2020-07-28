import axios from 'axios';
import { URL, KEY, GENRE } from '../utils/config';
export const START_FETCHING_MOVIES = 'START_FETCHING_MOVIES';
export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS';
export const MOVIES_FETCH_FAILURE = 'MOVIES_FETCH_FAILURE';

export const START_FETCHING_GENRES = 'START_FETCHING_GENRES';
export const GENRES_FETCH_SUCCESS = 'GENRES_FETCH_SUCCESS';
export const GENRES_FETCH_FAILURE = 'GENRES_FETCH_FAILURE';

export const START_FETCHING_TRENDING = 'START_FETCHING_TRENDING';
export const TRENDING_FETCH_SUCCESS = 'TRENDING_FETCH_SUCCESS';
export const TRENDING_FETCH_FAILURE = 'TRENDING_FETCH_FAILURE';

export const START_FETCHING_INFO = 'START_FETCHING_INFO';
export const INFO_FETCH_SUCCESS = 'INFO_FETCH_SUCCESS';
export const INFO_FETCH_FAILURE = 'INFO_FETCH_FAILURE';

export const START_FETCHING_SIMILAR = 'START_FETCHING_SIMILAR';
export const SIMILAR_FETCH_SUCCESS = 'SIMILAR_FETCH_SUCCESS';
export const SIMILAR_FETCH_FAILURE = 'SIMILAR_FETCH_FAILURE';

export const START_FETCHING_REVIEWS = 'START_FETCHING_REVIEWS';
export const REVIEWS_FETCH_SUCCESS = 'REVIEWS_FETCH_SUCCESS';
export const REVIEWS_FETCH_FAILURE = 'REVIEWS_FETCH_FAILURE';

export const fetchMovies = (type) => (dispatch) => {
  dispatch({ type: START_FETCHING_MOVIES });
  axios
    .get(`${URL}movie/${type}?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: MOVIES_FETCH_SUCCESS,
        payload: res.data.results,
        movie_type: `${type}`,
      });
    })
    .catch((err) =>
      dispatch({
        type: MOVIES_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchGenres = (genre) => (dispatch) => {
  dispatch({ type: START_FETCHING_GENRES });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=${genre.id}`)
    .then((res) => {
      dispatch({
        type: GENRES_FETCH_SUCCESS,
        payload: res.data.results,
        genre_type: `${genre.name}`,
      });
    })
    .catch((err) =>
      dispatch({
        type: GENRES_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchTrending = () => (dispatch) => {
  dispatch({ type: START_FETCHING_TRENDING });
  axios
    .get(`${URL}trending/movie/day?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: TRENDING_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: TRENDING_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchMovieInfo = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_INFO });
  axios
    .get(`${URL}movie/${id}?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: INFO_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: INFO_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchSimilar = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_SIMILAR });
  axios
    .get(`${URL}movie/${id}/similar?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: SIMILAR_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: SIMILAR_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchReviews = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_REVIEWS });
  axios
    .get(`${URL}movie/${id}/similar?api_key=${KEY}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: REVIEWS_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: REVIEWS_FETCH_FAILURE,
        payload: err.response,
      })
    );
};
