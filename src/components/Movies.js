import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { format } from '../utils/helpers';
import { IMG_URL, POSTER_SIZE } from '../utils/config';

import { NavLink, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import MovieThumb from './MovieThumb';

import NoImage from '../assets/no_image.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive, { ButtonGroup } from '../utils/helpers';

function Movies(props) {
  let data = props.movie_data.data;

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition='all 1'
      transitionDuration={1000}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['mobile']}
      itemClass='carousel-item-padding-40-px'
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      {data.map((movieData) => {
        let vote_average = Math.floor((movieData.vote_average / 10) * 100);
        return (
          <div key={movieData.id} className='movie-container'>
            <div>
              <div className='poster-container'>
                <NavLink
                  to={{
                    pathname: `/movie/${movieData.id}`,
                    props: { movieData },
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  {movieData.poster_path ? (
                    <MovieThumb
                      id={movieData.id}
                      IMG_URL={IMG_URL}
                      POSTER_SIZE={POSTER_SIZE}
                      poster_path={movieData.poster_path}
                    />
                  ) : (
                    <img src={NoImage} alt='not found' />
                  )}
                </NavLink>
                <Route
                  exact
                  path='/movie/:id'
                  render={(props) => (
                    <MovieInfo
                      {...props}
                      movie={movieData}
                      key={movieData.id}
                    />
                  )}
                />
                <div className='rating'>
                  <CircularProgressbar
                    value={vote_average}
                    text={`${vote_average}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'round',
                      textSize: '28px',
                      pathColor:
                        `${vote_average}` >= 75
                          ? '#21D07A'
                          : `${vote_average}` >= 50
                          ? '#C8CB2E'
                          : '#E50914',
                      textColor: '#ffffff',
                    })}
                  />
                </div>
              </div>
              <div className='movie-data'>
                <h3 className='movie-title'>
                  {movieData.title.length > 15
                    ? movieData.title.substring(0, 15, 3) + '...'
                    : movieData.title}
                </h3>
                <p>{format(movieData.release_date)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Movies;
