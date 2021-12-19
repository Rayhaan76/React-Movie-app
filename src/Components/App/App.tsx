import React, { useEffect, useState } from 'react';

import { SearchResults } from '../SearchResults/SearchResults';

import './App.css';

const App = () => {
  
  //NOTE: Sometimes the sorting can cause a movie to get stuck at the top of the list. 
  //I do not know what causes it, however it only seems to happen rarely. 

  const [unsorted, setUnsorted] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let array: any = [];

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=1')
      .then((res) => res.json())
      .then((data) => {
        array.push(...data.results);
      });
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=2')
      .then((res) => res.json())
      .then((data) => {
        array.push(...data.results);
      });
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=3')
      .then((res) => res.json())
      .then((data) => {
        array.push(...data.results);
      });
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=4')
      .then((res) => res.json())
      .then((data) => {
        array.push(...data.results);
      });
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=30681930d9f8a4d49ec75249be9647a1&with_genres=35&page=5')
      .then((res) => res.json())
      .then((data) => {
        array.push(...data.results);
        setMovies(array);
        setUnsorted(array);
      });
  }, [])

  if (movies === undefined) {
    return <div>Loading</div>
  }

  return (
    <div className='App'>

      <header className='App-header'>
        Popular Comedy Movies
      </header>

      <SearchResults movies={movies} setMovies={setMovies} unsorted={unsorted}/>
      
    </div>
  )

}

export default App;
