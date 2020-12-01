import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoviesService } from '../MoviesService';
import { moviesPage } from '../../core/actions/MoviesActions';

const usePages = ({ page }) => {
  const dispatch = useDispatch();
  const { pages } = useSelector(s => s.movies);

  useEffect(() => {
    if (!pages[page])
      MoviesService.getPopularMovies(page)
        .then((res) => dispatch(moviesPage(page, res?.data?.results)))
        .catch((err) => console.error(err));
  }, [pages, page]);
};

export default usePages;