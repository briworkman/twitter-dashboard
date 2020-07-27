import React from 'react';
import clock from '../assets/clock-regular.svg';
import money from '../assets/badge-dollar-regular.svg';
import ticket from '../assets/ticket-alt-regular.svg';

import { calcTime, convertMoney } from '../utils/helpers';

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <div className='movieinfobar-container'>
      <div className='movieinfobar-content'>
        <div className='movieinfobar-content-col'>
          <img src={clock} alt='clock' className='fa-time' />
          <span className='movieinfobar-info'>
            Running Time: {calcTime(time)}
          </span>
        </div>

        <div className='movieinfobar-content-col'>
          <img src={money} alt='money' className='fa-budget' />
          <span className='movieinfobar-info'>
            Budget: {convertMoney(budget)}
          </span>
        </div>
        <div className='movieinfobar-content-col'>
          <img src={ticket} alt='ticket' className='fa-revenue' />
          <span className='movieinfobar-info'>
            Revenue: {convertMoney(revenue)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieInfoBar;
