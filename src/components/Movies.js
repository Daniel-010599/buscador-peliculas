import React from 'react';
import Movie from './Movie';
import '../style/Movies.css';

const Movies = (props) =>{
    
    return(
        <div className="movies">
            {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default Movies;

/*
<div className="container">
     <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 gap-2">
        {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>
</div>*/