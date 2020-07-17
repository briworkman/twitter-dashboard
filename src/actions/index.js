import axios from 'axios';

export const START_FETCHING_POPULAR = 'START_FETCHING_POPULAR';
export const POPULAR_FETCH_SUCCESS = 'POPULAR_FETCH_SUCCESS';
export const POPULAR_FETCH_FAILURE = 'POPULAR_FETCH_FAILURE';

export const START_FETCHING_NOW_PLAYING = 'START_FETCHING_NOW_PLAYING';
export const NOW_PLAYING_FETCH_SUCCESS = 'NOW_PLAYING_FETCH_SUCCESS';
export const NOW_PLAYING_FETCH_FAILURE = 'NOW_PLAYING_FETCH_FAILURE';

export const START_FETCHING_TOP_RATED = 'START_FETCHING_TOP_RATED';
export const TOP_RATED_FETCH_SUCCESS = 'TOP_RATED_FETCH_SUCCESS';
export const TOP_RATED_FETCH_FAILURE = 'TOP_RATED_FETCH_FAILURE';

export const START_FETCHING_UPCOMING = 'START_FETCHING_UPCOMING';
export const UPCOMING_FETCH_SUCCESS = 'UPCOMING_FETCH_SUCCESS';
export const UPCOMING_FETCH_FAILURE = 'UPCOMING_FETCH_FAILURE';

let URL = process.env.REACT_APP_API_URL;
let KEY = process.env.REACT_APP_API_KEY;

export const fetchPopular = () => (dispatch) => {
  dispatch({ type: START_FETCHING_POPULAR });
  axios
    .get(`${URL}movie/popular?api_key=${KEY}`)
    .then((res) => {
      dispatch({ type: POPULAR_FETCH_SUCCESS, payload: res.data.results });
    })
    .catch((err) =>
      dispatch({ type: POPULAR_FETCH_FAILURE, payload: err.response })
    );
};

export const fetchNowPlaying = () => (dispatch) => {
  dispatch({ type: START_FETCHING_NOW_PLAYING });
  axios
    .get(`${URL}movie/now_playing?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: NOW_PLAYING_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: NOW_PLAYING_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchTopRated = () => (dispatch) => {
  dispatch({ type: START_FETCHING_TOP_RATED });
  axios
    .get(`${URL}movie/top_rated?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: TOP_RATED_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: TOP_RATED_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchUpcoming = () => (dispatch) => {
  dispatch({ type: START_FETCHING_UPCOMING });
  axios
    .get(`${URL}movie/top_rated?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: UPCOMING_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: UPCOMING_FETCH_FAILURE,
        payload: err.response,
      })
    );
};
