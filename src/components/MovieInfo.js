import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchMovieInfo } from '../actions';
import MovieInfoBar from './MovieInfoBar';

import styled from 'styled-components';

const StyledMovieInfo = styled.div`
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

const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10px;
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }
    @media screen and (max-width: 768px) {
      height: 350px;
    }
    @media screen and (max-width: 600px) {
      max-height: 300px;
    }
    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
    .clickable {
      cursor: pointer;
    }
  }
`;

function MovieInfo(props) {
  let id = props.match.params.id;
  let IMG_URL = process.env.REACT_APP_IMG_URL;
  let BACKDROP_SIZE = process.env.REACT_APP_BACKDROP_SIZE;
  let POSTER_SIZE = process.env.REACT_APP_POSTER_SIZE;

  useEffect(() => {
    props.fetchMovieInfo(id);
  }, [id]);

  console.log('PROPS: ', props);
  let movieInfo = props.info;

  return (
    <StyledMovieInfo
      IMG_URL={IMG_URL}
      BACKDROP_SIZE={BACKDROP_SIZE}
      backdrop={movieInfo.backdrop_path}
    >
      <div className='movieinfo-content'>
        <a href={movieInfo.homepage} target='_blank' rel='noopener noreferrer'>
          <div className='movieinfo-thumb'>
            <StyledMovieThumb>
              <img
                src={`${IMG_URL}${POSTER_SIZE}${movieInfo.poster_path}`}
                alt='movie poster'
              />
            </StyledMovieThumb>
          </div>
        </a>
        <div className='movieinfo-text'>
          <h1>{movieInfo.title}</h1>
          <h3>PLOT</h3>
          <p>{movieInfo.overview}</p>
          <div className='rating-genre'>
            <div>
              <h3>IMDB RATING</h3>
              <div className='score'>{movieInfo.vote_average}</div>
            </div>
            <div className='genre'>
              <h3>
                GENRE
                {movieInfo.genres
                  ? movieInfo.genres.length > 1
                    ? 'S'
                    : ''
                  : null}
              </h3>
              {movieInfo.genres
                ? movieInfo.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <MovieInfoBar
        time={movieInfo.runtime}
        budget={movieInfo.budget}
        revenue={movieInfo.revenue}
      />
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
