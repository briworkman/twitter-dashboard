import React from 'react';

function MovieThumb(props) {
  return (
    <div>
      <div className='similarposter-container'>
        <img
          src={`${props.IMG_URL}${props.POSTER_SIZE}${props.poster_path}`}
          alt='movie poster'
          className='movie-poster'
        />
      </div>
    </div>
  );
}

export default MovieThumb;
