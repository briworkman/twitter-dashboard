import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchPopular,
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
  fetchHorror,
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchRomance,
  fetchThriller,
  fetchFamily,
  fetchTrending,
} from '../actions';

function Data(data) {
  useEffect(() => {
    data.fetchPopular();
    data.fetchNowPlaying();
    data.fetchTopRated();
    data.fetchUpcoming();
    data.fetchHorror();
    data.fetchAction();
    data.fetchComedy();
    data.fetchDocumentary();
    data.fetchRomance();
    data.fetchThriller();
    data.fetchFamily();
    data.fetchTrending();
  }, []);

  console.log('popular: ', data.popular);
  console.log('now playing: ', data.now_playing);
  console.log('top rated: ', data.top_rated);
  console.log('upcoming: ', data.upcoming);
  console.log('horror: ', data.horror);
  console.log('action: ', data.action);
  console.log('comedy: ', data.comedy);
  console.log('documentary: ', data.documentary);
  console.log('romance: ', data.romance);
  console.log('thriller: ', data.thriller);
  console.log('family: ', data.family);
  console.log('trending: ', data.trending_today);

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
    horror: state.horror,
    action: state.action,
    comedy: state.comedy,
    documentary: state.documentary,
    romance: state.romance,
    thriller: state.thriller,
    family: state.family,
    trending_today: state.trending_today,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  fetchPopular,
  fetchNowPlaying,
  fetchTopRated,
  fetchUpcoming,
  fetchHorror,
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchRomance,
  fetchThriller,
  fetchFamily,
  fetchTrending,
})(Data);
