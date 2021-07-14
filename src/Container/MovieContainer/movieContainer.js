import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies} from '../../redux/movies/movieAction'

import CardComponent from '../../Component/CardComponent/cardComponent';

const MovieContainer = () => {
    const movies = useSelector(state => state.movie.movies)
    const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchMovies())
   },[])

    return (
        <div>
        <CardComponent movieList={movies}/>
            {/* <h1>Number Of IceCreeam = {movies} </h1>
            <button onClick ={() => dispatch(fetchMovies())}>Bye IceCreeam</button> */}
        </div>
    )
}
export default MovieContainer; 