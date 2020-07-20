import React, { useEffect } from 'react';

import Movies from './Movies';

import { connect } from 'react-redux';
import {
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
  fetchHorror,
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchRomance,
  fetchThriller,
  fetchFamily,
  fetchTrending,
} from '../actions';

function Data(data) {
  useEffect(() => {
    data.fetchNowPlaying();
    data.fetchTopRated();
    data.fetchUpcoming();
    data.fetchHorror();
    data.fetchAction();
    data.fetchComedy();
    data.fetchDocumentary();
    data.fetchRomance();
    data.fetchThriller();
    data.fetchFamily();
    data.fetchTrending();
  }, []);

  let movie_data = [
    {
      title: 'Trending',
      data: data.trending_today,
    },
    {
      title: 'Now Playing',
      data: data.now_playing,
    },
    {
      title: 'Top Rated',
      data: data.top_rated,
    },
    {
      title: 'Upcoming',
      data: data.upcoming,
    },
    {
      title: 'Horror',
      data: data.horror,
    },
    {
      title: 'Action',
      data: data.action,
    },
    {
      title: 'Comedy',
      data: data.comedy,
    },
    {
      title: 'Documentary',
      data: data.documentary,
    },
    {
      title: 'Romance',
      data: data.romance,
    },
    {
      title: 'Thriller',
      data: data.thriller,
    },
    {
      title: 'Family',
      data: data.family,
    },
    {
      title: 'Trending Today',
      data: data.trending_today,
    },
  ];

  return (
    <div>
      <Movies movies={movie_data} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    now_playing: state.now_playing,
    top_rated: state.top_rated,
    upcoming: state.upcoming,
    horror: state.horror,
    action: state.action,
    comedy: state.comedy,
    documentary: state.documentary,
    romance: state.romance,
    thriller: state.thriller,
    family: state.family,
    trending_today: state.trending_today,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
  fetchHorror,
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchRomance,
  fetchThriller,
  fetchFamily,
  fetchTrending,
})(Data);
