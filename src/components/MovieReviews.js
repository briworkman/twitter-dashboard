import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../actions';

function MovieReviews(props) {
  useEffect(() => {
    props.fetchReviews(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.reviews);
  return (
    <div>
      <h1>Movie Reviews</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

export default connect(mapStateToProps, {
  fetchReviews,
})(MovieReviews);
