import React from 'react';

import { calcTime, convertMoney } from '../utils/helpers';

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <div>
      <div className='movieinfobar-content'>
        <div className='movieinfobar-content-col'>
          {/* <FontAwesome className='fa-time' name='clock-o' size='2x' /> */}
          <span className='movieinfobar-info'>
            Running Time: {calcTime(time)}
          </span>
        </div>

        <div className='movieinfobar-content-col'>
          {/* <FontAwesome className='fa-budget' name='money' size='2x' /> */}
          <span className='movieinfobar-info'>
            Budget: {convertMoney(budget)}
          </span>
        </div>
        <div className='movieinfobar-content-col'>
          {/* <FontAwesome className='fa-revenue' name='ticket' size='2x' /> */}
          <span className='movieinfobar-info'>
            Revenue: {convertMoney(revenue)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieInfoBar;
