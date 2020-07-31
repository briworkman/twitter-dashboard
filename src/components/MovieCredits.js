import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCredits } from '../actions';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import NoImage from '../assets/no_image.jpg';

function MovieCredits(props) {
  useEffect(() => {
    props.fetchCredits(props.id);
  }, []);

  console.log(props);
  return (
    <div>
      {props.credits.map((actors) => {
        return (
          <div key={actors.id}>
            <h2>{actors.name}</h2>
            <img
              src={
                actors.profile_path
                  ? `${IMG_URL}${POSTER_SIZE}${actors.profile_path}`
                  : NoImage
              }
              alt='actor thumb'
            />
            <h4>{actors.character}</h4>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credits: state.credits,
  };
};

export default connect(mapStateToProps, {
  fetchCredits,
})(MovieCredits);
