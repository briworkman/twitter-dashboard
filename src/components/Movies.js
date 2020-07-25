import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';

function Movies(props) {
  let data = props.movie_data.data;
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  var format = function (input) {
    var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
    if (!input || !input.match(pattern)) {
      return null;
    }
    return input.replace(pattern, '$2/$3/$1');
  };

  return (
    <div className='movies'>
      {data.length >= 1
        ? data.map((data) => {
            let poster = `${IMG_URL}w500${data.poster_path}`;
            let vote_average = Math.floor((data.vote_average / 10) * 100);
            return (
              <div key={data.id}>
                <div className='poster-container'>
                  <NavLink
                    to={{ pathname: `/movie/${data.id}`, props: { data } }}
                  >
                    <img src={poster} alt='movie poster' />
                  </NavLink>
                  <Route
                    exact
                    path='/movie/:id'
                    render={(props) => (
                      <MovieInfo {...props} movie={data} key={data.id} />
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
                <div className='movie-data'>
                  <h3 className='movie-title'>
                    {data.title.length > 33
                      ? data.title.substring(0, 33, 3) + '...'
                      : data.title}
                  </h3>
                  <p>{format(data.release_date)}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Movies;
