import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCredits } from '../actions';

function MovieCredits(props) {
  useEffect(() => {
    props.fetchCredits(props.id);
  }, []);

  console.log(props);
  return (
    <div>
      <h1>Movie Credits</h1>
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
