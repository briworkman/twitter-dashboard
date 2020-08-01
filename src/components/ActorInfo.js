import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchActorInfo, fetchActorMovies } from '../actions/actors';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import { format, calcAge } from '../utils/helpers';
import ActorMovieList from './ActorMovieList';
import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';

function ActorInfo(props) {
  let id = props.match.params.id;

  useEffect(() => {
    props.fetchActorInfo(id);
    props.fetchActorMovies(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  let actor = props.actor;
  let actor_movies = props.actor_movies;
  let known_for = actor_movies.cast
    ? actor_movies.cast.filter((movie) => movie.vote_average >= 7)
    : [];

  return (
    <div className='actor-container'>
      <div className='actor-info'>
        <div className='actor-info-img'>
          <img
            src={`${IMG_URL}${POSTER_SIZE}${actor.profile_path}`}
            alt='actor thumb'
          />
        </div>
        <div>
          <h2 className='title'>
            {actor.name ? actor.name.toUpperCase() : null}
          </h2>
          <p className='biography'>{actor.biography}</p>
          <h2 className='title'>KNOWN FOR</h2>
          <div className='actor-movies'>
            {known_for.map((movies) => {
              return (
                <div key={movies.id}>
                  <NavLink
                    to={{
                      pathname: `/movie/${movies.id}`,
                      props: { movies },
                    }}
                  >
                    <div>
                      {movies.poster_path ? (
                        <div className='movie-list'>
                          <img
                            src={`${IMG_URL}${POSTER_SIZE}${movies.poster_path}`}
                            alt='movie thumb'
                          />
                        </div>
                      ) : null}
                    </div>
                  </NavLink>
                  <Route
                    exact
                    path='/movie/:id'
                    render={(props) => (
                      <MovieInfo {...props} movie={movies} key={movies.id} />
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h2 className='title'>PERSONAL INFO</h2>
        <div className='actor-data'>
          <h3>Known For</h3>
          <p>{actor.known_for_department}</p>
        </div>
        <div className='actor-data'>
          <h3>Gender</h3>
          <p>{actor.gender === 2 ? 'Male' : 'Female'}</p>
        </div>
        {actor.birthday ? (
          <div className='actor-data'>
            <h3>Birthday</h3>
            <p>
              {format(actor.birthday)} (
              {actor.birthday ? calcAge(actor.birthday) : null} years old)
            </p>
          </div>
        ) : null}
        {actor.place_of_birth ? (
          <div className='actor-data'>
            <h3>Place of Birth</h3>
            <p>{actor.place_of_birth}</p>
          </div>
        ) : null}
        <ActorMovieList list={actor_movies.cast} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    actor: state.actor,
    actor_movies: state.actor_movies,
  };
};

export default connect(mapStateToProps, {
  fetchActorInfo,
  fetchActorMovies,
})(ActorInfo);
