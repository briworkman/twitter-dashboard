import React from 'react';

function Movies(props) {
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  return (
    <div>
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className='movie-container'>
            <h1 className='title'>{movie.title.toUpperCase()}</h1>
            <div className='movies'>
              {movie.data.length >= 1
                ? movie.data.map((data) => {
                    // console.log(data);
                    let poster = `${IMG_URL}w500${data.poster_path}`;
                    return (
                      <div className='poster-container' key={data.id}>
                        <img src={poster} alt='movie poster' />
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
