import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesListHeader } from './MoviesListHeader';
import { MoviesService } from '../services/MoviesService';
import { moviesPage } from '../core/actions/MoviesActions';
import { Loading } from './Icons';

export const MoviesList = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { page, pages } = moviesStore;

  useEffect(() => {
    if (!pages[page])
      MoviesService.getPopularMovies(page)
        .then((res) => dispatch(moviesPage(page, res?.data?.results)))
        .catch((err) => console.error(err));
  }, [dispatch, page, pages]);

  return (
    !pages[page]
      ? <Loading />
      : <>
        <MoviesListHeader page={page} />
        <main className="pa3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', alignItems: 'stretch' }}>
          {pages[page].map((movie, index) => (
            <Link key={index} to={`/movies/${movie.id}`}>
              <article className="pointer card h-100">
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title"> {movie.title} </h5>
                </div>
              </article>
            </Link>
          ))}
        </main>
      </>
  );
}
