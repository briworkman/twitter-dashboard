import {
  START_FETCHING_MOVIES,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAILURE,
  START_FETCHING_GENRES,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_FAILURE,
  START_FETCHING_TRENDING,
  TRENDING_FETCH_SUCCESS,
  TRENDING_FETCH_FAILURE,
  START_FETCHING_INFO,
  INFO_FETCH_SUCCESS,
  INFO_FETCH_FAILURE,
  START_FETCHING_SIMILAR,
  SIMILAR_FETCH_SUCCESS,
  SIMILAR_FETCH_FAILURE,
  START_FETCHING_REVIEWS,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
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
  reviews: [],
  isFetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_MOVIES:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.movie_type]: action.payload,
      };
    case MOVIES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case START_FETCHING_GENRES:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case GENRES_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.genre_type]: action.payload,
      };
    case GENRES_FETCH_FAILURE:
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
    case START_FETCHING_REVIEWS:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case REVIEWS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        sreviews: action.payload,
      };
    case REVIEWS_FETCH_FAILURE:
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
