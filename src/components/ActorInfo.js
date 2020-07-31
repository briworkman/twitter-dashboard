import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchActorInfo } from '../actions/actors';

function ActorInfo(props) {
  let id = props.match.params.id;

  useEffect(() => {
    props.fetchActorInfo(id);
  }, []);

  console.log('ACTOR PROPS: ', props.actor);
  return (
    <div>
      <h1>{props.match.params.id}</h1>
      <h1>We are Actors 😎</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    actor: state.actor,
  };
};

export default connect(mapStateToProps, {
  fetchActorInfo,
})(ActorInfo);
