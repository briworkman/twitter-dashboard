import React from 'react';
import circle from '../assets/circle-regular.svg';
import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import { findYear, sortDates } from '../utils/helpers';

function ActorMovieList(props) {
  props.list ? sortDates(props.list) : console.log('loading...');

  return (
    <div>
      <h2 className='title'>ACTING</h2>
      <div className='acting-list-container'>
        {props.list
          ? props.list.map((acting) => {
              return (
                <div key={acting.id} className='acting-list'>
                  <p className='release-date'>
                    {acting.release_date
                      ? findYear(acting.release_date)
                      : '--------'}
                  </p>
                  <img src={circle} alt='bullet point' className='bullet' />
                  <div className='movie-container'>
                    <NavLink
                      to={{
                        pathname: `/movie/${acting.id}`,
                        props: { acting },
                      }}
                      style={{ textDecoration: 'none' }}
                    >
                      <h3>{acting.original_title} </h3>
                    </NavLink>
                    <Route
                      exact
                      path='/movie/:id'
                      render={(props) => (
                        <MovieInfo {...props} movie={acting} key={acting.id} />
                      )}
                    />
                  </div>
                  <p className='as'>as</p>
                  <p className='as-character'> {acting.character}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ActorMovieList;
