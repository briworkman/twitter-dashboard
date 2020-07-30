import React from 'react';

import Movies from './Movies';

function Home(props) {
  return (
    <div>
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className='home-container'>
            <h2 className='title'>{movie.title.toUpperCase()}</h2>
            <Movies movie_data={movie} title={movie.title} />
            <div className='spacer'></div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
