import React from 'react';
import { useDispatch } from 'react-redux';
import { ArrowLeft, ArrowRight } from './Icons';
import { nextPage, prevPage } from '../core/actions/MoviesActions';

export const MoviesListHeader = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <>
      <header className="pa3 flex justify-center bg-white" style={{ position: 'sticky', top: '56px', zIndex: '8888' }}>
        <button className="btn btn-outline-dark" onClick={() => dispatch(nextPage())}>
          <ArrowLeft />
        </button>
        <input type="text" className="form-control" disabled value={page} style={{ width: '3rem', textAlign: 'center' }} />
        <button className="btn btn-outline-dark" onClick={() => dispatch(prevPage())}>
          <ArrowRight />
        </button>
      </header>
    </>
  );
};
