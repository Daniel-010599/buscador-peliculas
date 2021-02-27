import React,{useState} from 'react';
import '../style/MovieSearch.css';

const MovieSearch = (props) => {
    const [movieSearch,setMovieSearch] = useState('');
    const [validate,setValidate] = useState(false);

    const handleChange = (e) =>{
        setMovieSearch(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(movieSearch==''){
            setValidate(true);
        }else{
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=a9573f17301d308bb511bb7fd75183d8&query=${movieSearch}`)
                .then(res => res.json())
                .then(result=>{
                    props.saveMovies(result.results);
                });

                setValidate(false);
        }
    }

    return(
        <div className="movie-search">
            <h1>Buscador de Películas</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-search">
                    <input onChange={handleChange} type="text"/>
                    <input type="submit" value="Buscar"/>
                </div>
            </form>
            {validate?<p><span>Por favor ingrese la película que desea ver.</span></p>:''}
        </div>
    )
}

export default MovieSearch;
