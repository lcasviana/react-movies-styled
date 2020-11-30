import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';

export const reducers = combineReducers({
  movies: MoviesReducer,
});