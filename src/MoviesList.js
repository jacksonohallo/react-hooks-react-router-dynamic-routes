import React from "react";
import { Link } from "react-router-dom";


function MoviesList({ movies }) {
    
    const renderMovies = Object.keys(movies).map((moviesID) => (
        <li key={moviesID}>
            <Link to={`/movies/${moviesID}`}>{movies[moviesID].title}</Link>

        </li>
    
    ));

    return <ul>{ renderMovies}</ul>



}

export default MoviesList;
