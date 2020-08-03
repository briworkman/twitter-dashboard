import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { format } from '../utils/helpers';
import { IMG_URL, POSTER_SIZE } from '../utils/config';

import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import MovieThumb from './MovieThumb';

import NoImage from '../assets/no_image.jpg';

function Movies(props) {
  let data = props.movie_data.data;
  let trending = undefined;
  let index = 0;

  if (props.title === 'Trending Today') {
    trending = props.title;
  }

  return (
    <div className='movies'>
      {data.length >= 1
        ? data.map((movieData) => {
            let vote_average = Math.floor((movieData.vote_average / 10) * 100);
            if (trending) {
              index = data.indexOf(movieData);
            }
            return (
              <div key={movieData.id} className='movie-container'>
                {trending ? (
                  <h1 className='trending-count'>{index + 1}</h1>
                ) : null}
                <div>
                  <div className='poster-container'>
                    <NavLink
                      to={{
                        pathname: `/movie/${movieData.id}`,
                        props: { movieData },
                      }}
                      style={{ textDecoration: 'none' }}
                    >
                      {movieData.poster_path ? (
                        <MovieThumb
                          id={movieData.id}
                          IMG_URL={IMG_URL}
                          POSTER_SIZE={POSTER_SIZE}
                          poster_path={movieData.poster_path}
                        />
                      ) : (
                        <img src={NoImage} alt='not found' />
                      )}
                    </NavLink>
                    <Route
                      exact
                      path='/movie/:id'
                      render={(props) => (
                        <MovieInfo
                          {...props}
                          movie={movieData}
                          key={movieData.id}
                        />
                      )}
                    />
                    <div className='rating'>
                      <CircularProgressbar
                        value={vote_average}
                        text={`${vote_average}%`}
                        styles={buildStyles({
                          rotation: 0.25,
                          strokeLinecap: 'round',
                          textSize: '28px',
                          pathColor:
                            `${vote_average}` >= 75
                              ? '#21D07A'
                              : `${vote_average}` >= 50
                              ? '#C8CB2E'
                              : '#E50914',
                          textColor: '#ffffff',
                        })}
                      />
                    </div>
                  </div>
                  {trending ? null : (
                    <div className='movie-data'>
                      <h3 className='movie-title'>
                        {movieData.title.length > 15
                          ? movieData.title.substring(0, 15, 3) + '...'
                          : movieData.title}
                      </h3>
                      <p>{format(movieData.release_date)}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Movies;
