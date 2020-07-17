import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

let URL = process.env.REACT_APP_API_URL;
let KEY = process.env.REACT_APP_API_KEY;

export const fetch = (endpoint) => (dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .get(`${URL}movie/${endpoint}?api_key=${KEY}`)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
    })
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
