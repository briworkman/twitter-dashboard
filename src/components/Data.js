import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPopular, fetchNowPlaying } from '../actions';

function Data(data) {
  useEffect(() => {
    data.fetchPopular();
    data.fetchNowPlaying();
  }, []);

  console.log('popular: ', data.popular);
  console.log('now playing: ', data.now_playing);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    now_playing: state.now_playing,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPopular, fetchNowPlaying })(
  Data
);
