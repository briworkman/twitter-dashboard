import React from 'react';

function Movies(props) {
  return (
    <div>
      {props.movies.map((movie) => {
        return (
          <div>
            <h1>{movie.title}</h1>
            {console.log(movie.data)}
            <div>
              {movie.data.length >= 1
                ? movie.data.map((data) => {
                    return (
                      <div>
                        <h3>{data.title}</h3>
                      </div>
                    );
                  })
                : console.log('...loading')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
