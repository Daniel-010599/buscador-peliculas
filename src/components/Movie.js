import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Movie.css';

const Movie = (props) =>{
    if(props.movie.poster_path==null){
        return null;
    }else
    return(
        <div className="movie" >
            <Link to={`/${props.movie.id}`} title={props.movie.original_title}>
                <h2>{props.movie.original_title}</h2>
                <div className="movie-img">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} alt={props.movie.original_title}/>
                </div>
            </Link>
        </div>
    )
}

export default Movie;


/*
<div className="col bg-success p-2 text-center">
    <h1 className="mb-10">{props.movie.original_title}</h1>
    <img style={styleImg} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`}/>
</div>*/