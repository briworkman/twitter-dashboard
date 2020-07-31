import axios from 'axios';
import { URL, KEY } from '../../utils/config';

export const START_FETCHING_ACTOR = 'START_FETCHING_ACTOR';
export const ACTOR_FETCH_SUCCESS = 'ACTOR_FETCH_SUCCESS';
export const ACTOR_FETCH_FAILURE = 'ACTOR_FETCH_FAILURE';

export const START_FETCHING_ACTOR_MOVIES = 'START_FETCHING_ACTOR_MOVIES';
export const ACTOR_MOVIES_FETCH_SUCCESS = 'ACTOR_MOVIES_FETCH_SUCCESS';
export const ACTOR_MOVIES_FETCH_FAILURE = 'ACTOR_MOVIES_FETCH_FAILURE';

export const fetchActorInfo = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_ACTOR });
  axios
    .get(`${URL}person/${id}?api_key=${KEY}`)
    .then((res) => {
      dispatch({
        type: ACTOR_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACTOR_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchActorMovies = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_ACTOR_MOVIES });
  axios
    .get(`${URL}person/${id}/movie_credits?api_key=${KEY}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: ACTOR_MOVIES_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACTOR_MOVIES_FETCH_FAILURE,
        payload: err.response,
      })
    );
};
