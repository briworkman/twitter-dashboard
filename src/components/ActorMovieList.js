import React from 'react';

function ActorMovieList(props) {
  console.log('ACTOR MOVIE LIST', props);

  return (
    <div>
      <h3>Acting</h3>
      {props.list
        ? props.list.map((acting) => {
            return (
              <div key={acting.id}>
                <h5>{acting.original_title}</h5>
                <h6>as</h6>
                <h5>{acting.character}</h5>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ActorMovieList;
