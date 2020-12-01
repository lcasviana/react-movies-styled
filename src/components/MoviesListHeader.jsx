import React from 'react';
import { useDispatch } from 'react-redux';
import { ArrowLeft, ArrowRight } from './Icons';
import { nextPage, prevPage } from '../core/actions/MoviesActions';
import { MoviesHeaderContainer } from './styles/MoviesStyled';

export const MoviesListHeader = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <>
      <MoviesHeaderContainer>
        <button className="btn btn-outline-dark" onClick={() => dispatch(nextPage())}>
          <ArrowLeft />
        </button>
        <input type="text" className="form-control" disabled value={page} style={{ width: '3rem', textAlign: 'center' }} />
        <button className="btn btn-outline-dark" onClick={() => dispatch(prevPage())}>
          <ArrowRight />
        </button>
      </MoviesHeaderContainer>
    </>
  );
};
