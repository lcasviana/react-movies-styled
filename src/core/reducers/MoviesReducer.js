import { actions as moviesActions } from '../actions/MoviesActions';

const stateInitial = {
  page: 1,
  pages: [],
  movies: {},
  playlist: [],
};

const MoviesReducer = (state = stateInitial, action) => {
  let pages, movies, playlist;
  switch (action.type) {
    case moviesActions.moviesPage:
      pages = [...state.pages];
      pages[action.page] = action.movies;
      return {
        ...state,
        pages,
      };

    case moviesActions.moviesList:
      movies = { ...state.movies };
      movies[action.id] = action.movies;
      return {
        ...state,
        movies,
      };

    case moviesActions.pageNext:
      if (state.page <= 1) return state;
      return {
        ...state,
        page: state.page - 1,
      };

    case moviesActions.pagePrev:
      if (state.page >= 1000) return state;
      return {
        ...state,
        page: state.page + 1,
      };

    case moviesActions.playlistInsert:
      playlist = [...new Set([...state.playlist, action.movie])];
      return {
        ...state,
        playlist,
      };

    case moviesActions.playlistRemove:
      playlist = state.playlist.filter((_, i) => i !== action.id);
      return {
        ...state,
        playlist,
      };

    default: return state;
  }
};

export default MoviesReducer;