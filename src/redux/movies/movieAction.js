import axios from 'axios'
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from './movieType'

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest())
    axios
      .get('http://localhost:3001/api/getmovie')
      .then(response => {
        // response.data is the users
        const movies = response.data
        dispatch(fetchMoviesSuccess(movies))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchMoviesFailure(error.message))
      })
  }
}

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
}

export const fetchMoviesSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchMoviesFailure = error => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  }
}