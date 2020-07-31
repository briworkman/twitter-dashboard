import axios from 'axios';
import { URL, KEY, GENRE } from '../../utils/config';

export const START_FETCHING_ACTOR = 'START_FETCHING_ACTOR';
export const ACTOR_FETCH_SUCCESS = 'ACTOR_FETCH_SUCCESS';
export const ACTOR_FETCH_FAILURE = 'ACTOR_FETCH_FAILURE';

export const fetchActorInfo = (id) => (dispatch) => {
  dispatch({ type: START_FETCHING_ACTOR });
  axios
    .get(`${URL}movie/${id}/reviews?api_key=${KEY}`)
    .then((res) => {
      console.log('ACTION ACTOR INFO: ', res);
      dispatch({
        type: ACTOR_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACTOR_FETCH_FAILURE,
        payload: err.response,
      })
    );
};
