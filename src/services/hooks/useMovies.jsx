import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoviesService } from '../MoviesService';
import { moviesList } from '../../core/actions/MoviesActions';

const useMovies = ({ id }) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(s => s.movies);

  useEffect(() => {
    if (!movies[id])
      MoviesService.getMovieById(id)
        .then((res) => dispatch(moviesList(id, res?.data)))
        .catch((err) => console.error(err));
  }, [movies, id]);
};

export default useMovies;