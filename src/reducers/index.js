import {
  START_FETCHING_NOW_PLAYING,
  NOW_PLAYING_FETCH_SUCCESS,
  NOW_PLAYING_FETCH_FAILURE,
  START_FETCHING_TOP_RATED,
  TOP_RATED_FETCH_SUCCESS,
  TOP_RATED_FETCH_FAILURE,
  START_FETCHING_HORROR,
  HORROR_FETCH_SUCCESS,
  HORROR_FETCH_FAILURE,
  START_FETCHING_ACTION,
  ACTION_FETCH_SUCCESS,
  ACTION_FETCH_FAILURE,
  START_FETCHING_COMEDY,
  COMEDY_FETCH_SUCCESS,
  COMEDY_FETCH_FAILURE,
  START_FETCHING_DRAMA,
  DRAMA_FETCH_SUCCESS,
  DRAMA_FETCH_FAILURE,
  START_FETCHING_DOCUMENTARY,
  DOCUMENTARY_FETCH_SUCCESS,
  DOCUMENTARY_FETCH_FAILURE,
  START_FETCHING_ROMANCE,
  ROMANCE_FETCH_SUCCESS,
  ROMANCE_FETCH_FAILURE,
  START_FETCHING_THRILLER,
  THRILLER_FETCH_SUCCESS,
  THRILLER_FETCH_FAILURE,
  START_FETCHING_FAMILY,
  FAMILY_FETCH_SUCCESS,
  FAMILY_FETCH_FAILURE,
  START_FETCHING_TRENDING,
  TRENDING_FETCH_SUCCESS,
  TRENDING_FETCH_FAILURE,
  START_FETCHING_INFO,
  INFO_FETCH_SUCCESS,
  INFO_FETCH_FAILURE,
  START_FETCHING_SIMILAR,
  SIMILAR_FETCH_SUCCESS,
  SIMILAR_FETCH_FAILURE,
} from '../actions';

const initialState = {
  popular: [],
  now_playing: [],
  top_rated: [],
  horror: [],
  action: [],
  comedy: [],
  drama: [],
  documentary: [],
  romance: [],
  thriller: [],
  family: [],
  trending_today: [],
  info: {},
  similar: [],
  isFetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case START_FETCHING_TOP_RATED:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case TOP_RATED_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        top_rated: action.payload,
      };
    case TOP_RATED_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_HORROR:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case HORROR_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        horror: action.payload,
      };
    case HORROR_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_ACTION:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case ACTION_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        action: action.payload,
      };
    case ACTION_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_COMEDY:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case COMEDY_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        comedy: action.payload,
      };
    case COMEDY_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_DRAMA:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case DRAMA_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        drama: action.payload,
      };
    case DRAMA_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_DOCUMENTARY:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case DOCUMENTARY_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        documentary: action.payload,
      };
    case DOCUMENTARY_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_ROMANCE:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case ROMANCE_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        romance: action.payload,
      };
    case ROMANCE_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_THRILLER:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case THRILLER_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        thriller: action.payload,
      };
    case THRILLER_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_FAMILY:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FAMILY_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        family: action.payload,
      };
    case FAMILY_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_TRENDING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case TRENDING_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        trending_today: action.payload,
      };
    case TRENDING_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_INFO:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case INFO_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        info: action.payload,
      };
    case INFO_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_SIMILAR:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case SIMILAR_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        similar: action.payload,
      };
    case SIMILAR_FETCH_FAILURE:
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
