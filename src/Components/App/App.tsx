import React, { useEffect, useState } from 'react';

import { getComedyMovies2 } from '../Moviedb/Moviedb';
import { SearchResults } from '../SearchResults/SearchResults';

import './App.css';

const App = () => {
  
  //const [allComedyMovies2, setAllComedyMovies2] = useState<any>([]);

  // const loadData = async () => {
  //   const testing = await getComedyMovies();
  //   console.log('testing');
  //   setAllComedyMovies(testing)
  //   console.log(testing)
  // }

  // loadData();

  // useEffect(() => {
  //   loadData();
  // }, [])

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=1')
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [])

  // useEffect(() => {
  //   let data = [];
  //   data = getComedyMovies2();
  //   console.log(data);
  //   setMovies(data);
  //   console.log(data);
  // }, [])

  if (movies === undefined) {
    return <div>Loading</div>
  }

  return (
    <div>
      <SearchResults movies={movies} setMovies={setMovies}/>
    </div>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       Comedy Movies
  //     </header>
  //       <SearchResults />
  //     <div>

  //     </div>
  //   </div>
  // );
}

export default App;
