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
  START_FETCHING_CREDITS,
  CREDITS_FETCH_SUCCESS,
  CREDITS_FETCH_FAILURE,
  START_FETCHING_REVIEWS,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
} from '../actions/movies';

import {
  START_FETCHING_ACTOR,
  ACTOR_FETCH_SUCCESS,
  ACTOR_FETCH_FAILURE,
  START_FETCHING_ACTOR_MOVIES,
  ACTOR_MOVIES_FETCH_SUCCESS,
  ACTOR_MOVIES_FETCH_FAILURE,
} from '../actions/actors';

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
  credits: [],
  reviews: [],
  actor: {},
  actor_movies: [],
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_MOVIES:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        [action.movie_type]: action.payload,
      };
    case MOVIES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_GENRES:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GENRES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        [action.genre_type]: action.payload,
      };
    case GENRES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_TRENDING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case TRENDING_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        trending_today: action.payload,
      };
    case TRENDING_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_INFO:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case INFO_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        info: action.payload,
      };
    case INFO_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_SIMILAR:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SIMILAR_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        similar: action.payload,
      };
    case SIMILAR_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_CREDITS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case CREDITS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        credits: action.payload,
      };
    case CREDITS_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_REVIEWS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case REVIEWS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        reviews: action.payload,
      };
    case REVIEWS_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_ACTOR:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ACTOR_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        actor: action.payload,
      };
    case ACTOR_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_FETCHING_ACTOR_MOVIES:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ACTOR_MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        actor_movies: action.payload,
      };
    case ACTOR_MOVIES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
