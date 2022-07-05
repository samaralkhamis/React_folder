import React, {useState , useEffect} from 'react';
import Movie from './Movie';
import { Card } from 'react-bootstrap';
//4a2e78cbfcmsh08a2918f5e4e6d8p12960cjsn77e48775642c


    const App = () => {
        const [popular, setPopular] = useState([]);
        const url =
          "https://api.themoviedb.org/3/movie/popular?api_key=cd50b668108ab0e7d74f4585d5c05b53";
      useEffect(() => {
          fetchPopular();
        },[]);
      const fetchPopular = async () => {
          const data = await fetch(url);
          const movies = await data.json();
          console.log(movies);
          setPopular(movies.results);
        };
      return (
          <div className="App">
            <h1>Hello App Component</h1>
            {popular.map(movie => {
        return <Movie key={movie.id} movie={movie}/>;
      })}


          </div>
        );
      };

export default App;