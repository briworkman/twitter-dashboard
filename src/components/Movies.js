import React from 'react';

function Movies(props) {
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  return (
    <div>
      {props.movies.map((movie) => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <div className='movies'>
              {movie.data.length >= 1
                ? movie.data.map((data) => {
                    let poster = `${IMG_URL}w500${data.poster_path}`;
                    return (
                      <div className='poster-container'>
                        <img src={poster} />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
