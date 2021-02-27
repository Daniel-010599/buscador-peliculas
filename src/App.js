import React,{useState} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import Movies from './components/Movies';
import Detail from './components/Detail';
import './App.css';

const App = () => {
  const [movies,setMovies] = useState([]);
  const [used,setUsed] = useState(false);

  function saveMovies(movies){
    setMovies(movies);
    setUsed(true);
  }

  function showMovies(){
    if(movies == 0){
      return <h2 className="no-results">Sin resultados. Por favor buscar otra película.</h2>;
    }else{
      return <Movies movies={movies}/>
    }
  }

  return(
    <div>
      <Router>
        <Switch>
          <Route path='/buscador-peliculas' exact>
            <MovieSearch showMovies={showMovies} saveMovies={saveMovies}/>
            {used?showMovies():''}
          </Route>
          <Route path='/buscador-peliculas/:id'>
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
