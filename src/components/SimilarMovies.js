import React from 'react';
import MovieThumb from './MovieThumb';
import { IMG_URL, POSTER_SIZE } from '../utils/config';

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
                  <MovieThumb
                    id={similar.id}
                    IMG_URL={IMG_URL}
                    POSTER_SIZE={POSTER_SIZE}
                    poster_path={similar.poster_path}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SimilarMovies;
