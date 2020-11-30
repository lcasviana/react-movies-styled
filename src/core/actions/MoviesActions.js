export const actions = {
  pageNext: 'PageNext',
  pagePrev: 'PagePrev',
  moviesPage: 'MoviesPage',
  moviesList: 'MoviesList',
  playlistInsert: 'PlaylistInsert',
  playlistRemove: 'PlaylistRemove',
};

export const nextPage = () => ({
  type: actions.pageNext,
});

export const prevPage = () => ({
  type: actions.pagePrev,
});

export const moviesPage = (page, movies) => ({
  type: actions.moviesPage,
  page,
  movies,
});

export const moviesList = (id, movies) => ({
  type: actions.moviesList,
  id,
  movies,
});

export const insertPlaylist = (movie) => ({
  type: actions.playlistInsert,
  movie,
});

export const removePlaylist = (id) => ({
  type: actions.playlistRemove,
  id,
});