import React, { useState, useRef } from 'react';

const SearchBar = () => {
  const [state, setState] = useState('');

  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

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

export default SearchBar;
