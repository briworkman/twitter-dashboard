import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

function Popular(props) {
  useEffect(() => {
    props.fetch('popular');
  }, []);

  console.log(props);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Movies: state.Movies,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetch })(Popular);
