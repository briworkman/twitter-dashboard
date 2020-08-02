import React from 'react';
import MovieThumb from './MovieThumb';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import NoImage from '../assets/no_image.jpg';

function SimilarMovies(props) {
  return (
    <div>
      {props.similar.length > 0 ? (
        <div>
          <h2 className='similar-title'>SIMILAR MOVIES</h2>
          <div className='movies'>
            {props.similar.map((similar) => {
              return (
                <div key={similar.id}>
                  {similar.poster_path ? (
                    <MovieThumb
                      id={similar.id}
                      IMG_URL={IMG_URL}
                      POSTER_SIZE={POSTER_SIZE}
                      poster_path={similar.poster_path}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className='spacer'></div>
    </div>
  );
}

export default SimilarMovies;
