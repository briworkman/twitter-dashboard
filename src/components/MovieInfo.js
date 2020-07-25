import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchMovieInfo } from '../actions';

function MovieInfo(props) {
  let id = props.match.params.id;

  useEffect(() => {
    props.fetchMovieInfo(id);
  }, []);

  console.log('PROPS: ', props);

  return (
    <div>
      <h1>Movie Info</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps, {
  fetchMovieInfo,
})(MovieInfo);
