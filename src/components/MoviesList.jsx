import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesListHeader } from './MoviesListHeader';
import { Loading } from './Icons';
import { MoviesListContainer, MoviesListCard } from './styles/MoviesStyled';
import usePages from '../services/hooks/usePages';

export const MoviesList = () => {
  const { page, pages } = useSelector(s => s.movies);
  usePages({ page, pages });

  return (
    !pages[page]
      ? <Loading />
      : <>
        <MoviesListHeader page={page} />
        <MoviesListContainer>
          {pages[page].map((movie, index) => (
            <Link key={index} to={`/movies/${movie.id}`}>
              <MoviesListCard className="card">
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title"> {movie.title} </h5>
                </div>
              </MoviesListCard>
            </Link>
          ))}
        </MoviesListContainer>
      </>
  );
}
