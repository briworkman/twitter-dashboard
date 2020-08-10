import React from 'react';
import MovieThumb from './MovieThumb';
import { IMG_URL, POSTER_SIZE } from '../utils/config';
import responsive, { SimilarButtonGroup } from '../utils/helpers';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SimilarMovies(props) {
  return (
    <div>
      {props.similar.length > 0 ? (
        <div>
          <h2 className='similar-title'>SIMILAR MOVIES</h2>
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
            containerClass='similar-carousel-container'
            removeArrowOnDeviceType={['mobile']}
            itemClass='carousel-item-padding-40-px'
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<SimilarButtonGroup />}
          >
            {props.similar.map((similar) => {
              return (
                <div key={similar.id}>
                  {similar.poster_path ? (
                    <MovieThumb
                      id={similar.id}
                      IMG_URL={IMG_URL}
                      POSTER_SIZE={POSTER_SIZE}
                      poster_path={similar.poster_path}
                    />
                  ) : null}
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : null}
      <div className='spacer'></div>
    </div>
  );
}

export default SimilarMovies;
