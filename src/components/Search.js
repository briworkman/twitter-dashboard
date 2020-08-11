import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movies';

const Search = (props) => {
  const [state, setState] = useState('');

  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      props.searchMovies(value);
    }, 500);
  };

  console.log(props.search);

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Search Movies'
          onChange={doSearch}
          value={state}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  searchMovies,
})(Search);
