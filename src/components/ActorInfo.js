import React from 'react';

function ActorInfo(props) {
  console.log('ACTOR PROPS: ', props);
  return (
    <div>
      <h1>{props.match.params.id}</h1>
      <h1>We are Actors 😎</h1>
    </div>
  );
}

export default ActorInfo;
