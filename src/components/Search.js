import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movies';
import MovieThumb from './MovieThumb';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import NoImage from '../assets/no_image.jpg';

const Search = (props) => {
  const [state, setState] = useState('');

  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      props.searchMovies(value);
    }, 500);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Search Movies'
          onChange={doSearch}
          value={state}
          className='input'
        />
      </div>
      <div className='search-movies'>
        {props.search.map((movie) => {
          return (
            <div>
              <NavLink
                to={{
                  pathname: `/movie/${movie.id}`,
                  props: { movie },
                }}
                style={{ textDecoration: 'none' }}
              >
                {movie.poster_path ? (
                  <MovieThumb
                    id={movie.id}
                    IMG_URL={IMG_URL}
                    POSTER_SIZE={POSTER_SIZE}
                    poster_path={movie.poster_path}
                  />
                ) : (
                  <img src={NoImage} alt='not found' className='movie-poster' />
                )}
              </NavLink>
              <Route
                exact
                path='/movie/:id'
                render={(props) => (
                  <MovieInfo {...props} movie={movie} key={movie.id} />
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  searchMovies,
})(Search);
