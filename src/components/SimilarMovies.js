import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSimilar } from '../actions';

function SimilarMovies(props) {
  useEffect(() => {
    props.fetchSimilar(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props.similar);

  return (
    <div>
      <p>{props.id}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    similar: state.similar,
  };
};

export default connect(mapStateToProps, {
  fetchSimilar,
})(SimilarMovies);
