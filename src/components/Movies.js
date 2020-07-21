import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Movies(props) {
  // console.log(props);
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  return (
    <div>
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className='movie-container'>
            <h2 className='title'>{movie.title.toUpperCase()}</h2>
            <div className='movies'>
              {movie.data.length >= 1
                ? movie.data.map((data) => {
                    let poster = `${IMG_URL}w500${data.poster_path}`;
                    let vote_average = Math.floor(
                      (data.vote_average / 10) * 100
                    );
                    return (
                      <div className='poster-container' key={data.id}>
                        <img src={poster} alt='movie poster' />
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
                    );
                  })
                : null}
            </div>
            <div className='spacer'></div>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
