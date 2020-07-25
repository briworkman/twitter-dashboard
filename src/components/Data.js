import React, { useEffect } from 'react';

import Hero from './Hero';
import Home from './Home';

import { connect } from 'react-redux';
import {
  fetchNowPlaying,
  fetchTopRated,
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
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  let BACKDROP_SIZE = process.env.REACT_APP_BACKDROP_SIZE;

  useEffect(() => {
    data.fetchNowPlaying();
    data.fetchTopRated();
    data.fetchHorror();
    data.fetchAction();
    data.fetchComedy();
    data.fetchDocumentary();
    data.fetchRomance();
    data.fetchThriller();
    data.fetchFamily();
    data.fetchTrending();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let hero_image = data.trending_today[0];

  let movie_data = [
    {
      id: 1,
      title: 'Trending',
      data: data.trending_today,
    },
    {
      id: 2,
      title: 'Now Playing',
      data: data.now_playing,
    },
    {
      id: 3,
      title: 'Top Rated',
      data: data.top_rated,
    },
    {
      id: 5,
      title: 'Horror',
      data: data.horror,
    },
    {
      id: 6,
      title: 'Action',
      data: data.action,
    },
    {
      id: 7,
      title: 'Comedy',
      data: data.comedy,
    },
    {
      id: 8,
      title: 'Documentary',
      data: data.documentary,
    },
    {
      id: 9,
      title: 'Romance',
      data: data.romance,
    },
    {
      id: 10,
      title: 'Thriller',
      data: data.thriller,
    },
    {
      id: 11,
      title: 'Family',
      data: data.family,
    },
    {
      id: 12,
      title: 'Trending Today',
      data: data.trending_today,
    },
  ];

  return (
    <div>
      {hero_image ? (
        <Hero
          image={`${IMG_URL}${BACKDROP_SIZE}${hero_image.backdrop_path}`}
          title={hero_image.original_title}
          text={hero_image.overview}
        />
      ) : null}
      <Home movies={movie_data} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    now_playing: state.now_playing,
    top_rated: state.top_rated,
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
  fetchHorror,
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchRomance,
  fetchThriller,
  fetchFamily,
  fetchTrending,
})(Data);
