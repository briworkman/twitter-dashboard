import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSimilar } from '../actions';
import { IMG_URL, POSTER_SIZE } from '../utils/config';

function SimilarMovies(props) {
  useEffect(() => {
    props.fetchSimilar(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('SIMILAR: ', props.similar);

  return (
    <div>
      <h2>Similar Movies</h2>
      <div className='movies'>
        {props.similar.length > 0
          ? props.similar.map((similar) => {
              let poster = `${IMG_URL}${POSTER_SIZE}${similar.poster_path}`;
              return (
                <div key={similar.id}>
                  <div className='poster-container'>
                    <img src={poster} alt='movie poster' />
                  </div>
                </div>
              );
            })
          : null}
      </div>
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
