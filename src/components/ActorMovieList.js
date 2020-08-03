import React from 'react';
import circle from '../assets/circle-regular.svg';
import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';

function ActorMovieList(props) {
  console.log('ACTOR MOVIE LIST', props);

  return (
    <div>
      <h3>Acting</h3>
      <div className='acting-list-container'>
        {props.list
          ? props.list.map((acting) => {
              return (
                <div key={acting.id} className='acting-list'>
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
