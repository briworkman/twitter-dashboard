import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchPopular,
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
} from '../actions';

function Data(data) {
  useEffect(() => {
    data.fetchPopular();
    data.fetchNowPlaying();
    data.fetchTopRated();
    data.fetchUpcoming();
  }, []);

  console.log('popular: ', data.popular);
  console.log('now playing: ', data.now_playing);
  console.log('top rated: ', data.top_rated);
  console.log('upcoming: ', data.upcoming);

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
    top_rated: state.top_rated,
    upcoming: state.upcoming,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  fetchPopular,
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
})(Data);
