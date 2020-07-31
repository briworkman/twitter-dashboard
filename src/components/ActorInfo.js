import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchActorInfo } from '../actions/actors';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import { format } from '../utils/helpers';

function ActorInfo(props) {
  let id = props.match.params.id;

  useEffect(() => {
    props.fetchActorInfo(id);
  }, []);

  let actor = props.actor;

  console.log('ACTOR PROPS: ', props.actor);
  return (
    <div className='actor-info'>
      <div className='actors'>
        <img
          src={`${IMG_URL}${POSTER_SIZE}${actor.profile_path}`}
          alt='actor thumb'
        />
      </div>
      <div>
        <div className='actor-data'>
          <h3>Known For</h3>
          <p>{actor.known_for_department}</p>
        </div>
        <div className='actor-data'>
          <h3>Gender</h3>
          <p>{actor.gender === 2 ? 'Male' : 'Female'}</p>
        </div>
        <div className='actor-data'>
          <h3>Birthday</h3>
          <p>{format(actor.birthday)}</p>
        </div>
        <div className='actor-data'>
          <h3>Place of Birth</h3>
          <p>{actor.place_of_birth}</p>
        </div>
      </div>
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
