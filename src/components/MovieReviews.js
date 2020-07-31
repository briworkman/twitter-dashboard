import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../actions';
import reviews from '../assets/reviews.svg';

function MovieReviews(props) {
  useEffect(() => {
    props.fetchReviews(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='review-container'>
      <div>
        <img src={reviews} alt='5 stars' />
      </div>
      <div className='review-flex'>
        {props.reviews.map((reviews) => {
          return (
            <div className='reviews' key={reviews.id}>
              <h3>{reviews.author}</h3>
              <p>
                {reviews.content.length > 250
                  ? reviews.content.substring(0, 250, 3) + '...'
                  : reviews.content}
              </p>
              <a href={reviews.url} target='_blank' rel='noopener noreferrer'>
                <p className='read-more'>READ MORE</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

export default connect(mapStateToProps, {
  fetchReviews,
})(MovieReviews);
