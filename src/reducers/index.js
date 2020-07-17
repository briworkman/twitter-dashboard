import {
  START_FETCHING_POPULAR,
  POPULAR_FETCH_SUCCESS,
  POPULAR_FETCH_FAILURE,
  START_FETCHING_NOW_PLAYING,
  NOW_PLAYING_FETCH_SUCCESS,
  NOW_PLAYING_FETCH_FAILURE,
} from '../actions';

const initialState = {
  popular: [],
  now_playing: [],
  isFetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case START_FETCHING_POPULAR:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case POPULAR_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        popular: action.payload,
      };
    case POPULAR_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_NOW_PLAYING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case NOW_PLAYING_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        now_playing: action.payload,
      };
    case NOW_PLAYING_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
