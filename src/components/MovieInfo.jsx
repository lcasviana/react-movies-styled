import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesService } from '../services/MoviesService';
import { ArrowLeft, Loading, BookmarkInsert } from './Icons';
import { moviesList, insertPlaylist } from '../core/actions/MoviesActions';

export const MovieInfo = (props) => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { movies } = moviesStore;
  const id = props?.match?.params?.id;

  useEffect(() => {
    if (!movies[id])
      MoviesService.getMovieById(id)
        .then((res) => dispatch(moviesList(id, res?.data)))
        .catch((err) => console.error(err));
  }, []);

  return (
    !movies[id]
      ? <Loading />
      : <>
        <header className="pa3 flex justify-center">
          <Link to={'/'}>
            <button className="btn btn-outline-dark">
              Return <ArrowLeft />
            </button>
          </Link>
          <button className="btn btn-outline-dark" onClick={() => dispatch(insertPlaylist(movies[id]))}>
            Playlist <BookmarkInsert />
          </button>
        </header>
        <article className="card ma3 flex-row">
          <img src={`http://image.tmdb.org/t/p/w500${movies[id].poster_path}`} alt={movies[id].title} style={{ width: '200px', height: '300px' }} />
          <div className="card-body">
            <h5 className="card-title"> {movies[id].title} </h5>
            <p className="card-text"> {movies[id].overview} </p>
            <p className="card-text"> Release Date: {movies[id].release_date} </p>
            <p className="card-text"> Average Vote: {movies[id].vote_average} / 10 </p>
            <a href={`https://www.imdb.com/title/${movies[id].imdb_id}`}> IMDB Page </a>
          </div>
        </article>
      </>
  );
}
