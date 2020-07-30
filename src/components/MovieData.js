import React, { useEffect } from 'react';

import { IMG_URL, BACKDROP_SIZE } from '../utils/config';

import Hero from './Hero';
import Home from './Home';

import { connect } from 'react-redux';
import { fetchMovies, fetchGenres, fetchTrending } from '../actions';

function MovieData(data) {
  useEffect(() => {
    data.fetchMovies('now_playing');
    data.fetchMovies('top_rated');
    data.fetchGenres({ id: 27, name: 'horror' });
    data.fetchGenres({ id: 28, name: 'action' });
    data.fetchGenres({ id: 35, name: 'comedy' });
    data.fetchGenres({ id: 99, name: 'documentary' });
    data.fetchGenres({ id: 10749, name: 'romance' });
    data.fetchGenres({ id: 53, name: 'thriller' });
    data.fetchGenres({ id: 10751, name: 'family' });
    data.fetchTrending();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let hero_image = data.trending_today[0];
  let trending = data.trending_today.splice(0, 10);

  let movie_data = [
    {
      id: 1,
      title: 'Trending Today',
      data: trending,
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
  fetchMovies,
  fetchGenres,
  fetchTrending,
})(MovieData);
