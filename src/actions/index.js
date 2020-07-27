import axios from 'axios';
import { URL, KEY, GENRE } from '../utils/config';

export const START_FETCHING_NOW_PLAYING = 'START_FETCHING_NOW_PLAYING';
export const NOW_PLAYING_FETCH_SUCCESS = 'NOW_PLAYING_FETCH_SUCCESS';
export const NOW_PLAYING_FETCH_FAILURE = 'NOW_PLAYING_FETCH_FAILURE';

export const START_FETCHING_TOP_RATED = 'START_FETCHING_TOP_RATED';
export const TOP_RATED_FETCH_SUCCESS = 'TOP_RATED_FETCH_SUCCESS';
export const TOP_RATED_FETCH_FAILURE = 'TOP_RATED_FETCH_FAILURE';

export const START_FETCHING_HORROR = 'START_FETCHING_HORROR';
export const HORROR_FETCH_SUCCESS = 'HORROR_FETCH_SUCCESS';
export const HORROR_FETCH_FAILURE = 'HORROR_FETCH_FAILURE';

export const START_FETCHING_ACTION = 'START_FETCHING_ACTION';
export const ACTION_FETCH_SUCCESS = 'ACTION_FETCH_SUCCESS';
export const ACTION_FETCH_FAILURE = 'ACTION_FETCH_FAILURE';

export const START_FETCHING_COMEDY = 'START_FETCHING_COMEDY';
export const COMEDY_FETCH_SUCCESS = 'COMEDY_FETCH_SUCCESS';
export const COMEDY_FETCH_FAILURE = 'COMEDY_FETCH_FAILURE';

export const START_FETCHING_DRAMA = 'START_FETCHING_DRAMA';
export const DRAMA_FETCH_SUCCESS = 'DRAMA_FETCH_SUCCESS';
export const DRAMA_FETCH_FAILURE = 'DRAMA_FETCH_FAILURE';

export const START_FETCHING_DOCUMENTARY = 'START_FETCHING_DOCUMENTARY';
export const DOCUMENTARY_FETCH_SUCCESS = 'DOCUMENTARY_FETCH_SUCCESS';
export const DOCUMENTARY_FETCH_FAILURE = 'DOCUMENTARY_FETCH_FAILURE';

export const START_FETCHING_ROMANCE = 'START_FETCHING_ROMANCE';
export const ROMANCE_FETCH_SUCCESS = 'ROMANCE_FETCH_SUCCESS';
export const ROMANCE_FETCH_FAILURE = 'ROMANCE_FETCH_FAILURE';

export const START_FETCHING_THRILLER = 'START_FETCHING_THRILLER';
export const THRILLER_FETCH_SUCCESS = 'THRILLER_FETCH_SUCCESS';
export const THRILLER_FETCH_FAILURE = 'THRILLER_FETCH_FAILURE';

export const START_FETCHING_FAMILY = 'START_FETCHING_FAMILY';
export const FAMILY_FETCH_SUCCESS = 'FAMILY_FETCH_SUCCESS';
export const FAMILY_FETCH_FAILURE = 'FAMILY_FETCH_FAILURE';

export const START_FETCHING_TRENDING = 'START_FETCHING_TRENDING';
export const TRENDING_FETCH_SUCCESS = 'TRENDING_FETCH_SUCCESS';
export const TRENDING_FETCH_FAILURE = 'TRENDING_FETCH_FAILURE';

export const START_FETCHING_INFO = 'START_FETCHING_INFO';
export const INFO_FETCH_SUCCESS = 'INFO_FETCH_SUCCESS';
export const INFO_FETCH_FAILURE = 'INFO_FETCH_FAILURE';

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

export const fetchHorror = () => (dispatch) => {
  dispatch({ type: START_FETCHING_HORROR });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=27`)
    .then((res) => {
      dispatch({
        type: HORROR_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: HORROR_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchAction = () => (dispatch) => {
  dispatch({ type: START_FETCHING_ACTION });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=28`)
    .then((res) => {
      dispatch({
        type: ACTION_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACTION_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchComedy = () => (dispatch) => {
  dispatch({ type: START_FETCHING_COMEDY });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=35`)
    .then((res) => {
      dispatch({
        type: COMEDY_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: COMEDY_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchDrama = () => (dispatch) => {
  dispatch({ type: START_FETCHING_DRAMA });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=18`)
    .then((res) => {
      dispatch({
        type: DRAMA_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: DRAMA_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchDocumentary = () => (dispatch) => {
  dispatch({ type: START_FETCHING_DOCUMENTARY });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=99`)
    .then((res) => {
      dispatch({
        type: DOCUMENTARY_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: DOCUMENTARY_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchRomance = () => (dispatch) => {
  dispatch({ type: START_FETCHING_ROMANCE });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=10749`)
    .then((res) => {
      dispatch({
        type: ROMANCE_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: ROMANCE_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchThriller = () => (dispatch) => {
  dispatch({ type: START_FETCHING_THRILLER });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=53`)
    .then((res) => {
      dispatch({
        type: THRILLER_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: THRILLER_FETCH_FAILURE,
        payload: err.response,
      })
    );
};

export const fetchFamily = () => (dispatch) => {
  dispatch({ type: START_FETCHING_FAMILY });
  axios
    .get(`${URL}discover/movie?api_key=${KEY}&${GENRE}=10751`)
    .then((res) => {
      dispatch({
        type: FAMILY_FETCH_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) =>
      dispatch({
        type: FAMILY_FETCH_FAILURE,
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
