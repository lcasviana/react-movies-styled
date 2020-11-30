import axios from 'axios';

export class MoviesService {
  static apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

  static _withBaseUrl(path, query = '') {
    return `https://api.themoviedb.org/3/${path}?${query}&api_key=${MoviesService.apiKey}`;
  }

  static getMovieById(movieId) {
    return axios(MoviesService._withBaseUrl(`movie/${movieId}`));
  }

  static getPopularMovies(page) {
    return axios(MoviesService._withBaseUrl('movie/popular', `page=${page}`));
  }
}
