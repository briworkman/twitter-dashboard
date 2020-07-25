import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchMovieInfo } from '../actions';

import styled from 'styled-components';

export const StyledMovieInfo = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${props.IMG_URL}${props.BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    width: 85%;
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }
  .movieinfo-thumb {
    width: 300px;
    float: left;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
  .movieinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;
    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;
      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }
    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }
    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }
  .rating-genre {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }
  .genre {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }
  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function MovieInfo(props) {
  let id = props.match.params.id;
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  let BACKDROP_SIZE = process.env.REACT_APP_BACKDROP_SIZE;

  useEffect(() => {
    props.fetchMovieInfo(id);
  }, [id]);

  console.log('PROPS: ', props);

  return (
    <StyledMovieInfo
      IMG_URL={IMG_URL}
      BACKDROP_SIZE={BACKDROP_SIZE}
      backdrop={props.info.backdrop_path}
    >
      <div className='movieinfo-content'>
        <div className='movieinfo-text'>
          <h1>{props.info.title}</h1>
          <h3>PLOT</h3>
          <p>{props.info.overview}</p>
          <div className='rating-genre'>
            <div>
              <h3>IMDB RATING</h3>
              <div className='score'>{props.info.vote_average}</div>
            </div>
            <div className='genre'>
              <h3>
                GENRE
                {props.info.genres
                  ? props.info.genres.length > 1
                    ? 's'
                    : ''
                  : null}
              </h3>
              {props.info.genres
                ? props.info.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps, {
  fetchMovieInfo,
})(MovieInfo);
