import React, { useEffect, useState } from 'react';

import { getComedyMovies } from '../Moviedb/Moviedb';
import { SearchResults } from '../SearchResults/SearchResults';

import './App.css';

// let resultsData;

// const getResults = async () => {
//   resultsData = await getData();
//   //console.log(resultsData);
// }

const App = () => {

  const [fullList, setFullList] = useState([
    {id: 1, title: 'A Movie 1', rating: 60},
    {id: 2, title: 'AB Movie 2', rating: 70},
    {id: 3, title: 'AC Movie 3', rating: 50},
    {id: 4, title: 'D Movie 4', rating: 100},
  ]);
  
  const [allComedyMovies, setAllComedyMovies] = useState([]);

  const loadData = async () => {
    const testing = await getComedyMovies();
    setAllComedyMovies(testing)
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Comedy Movies
      </header>
        <SearchResults fullList={fullList} setFullList={setFullList} allComedyMovies={allComedyMovies}/>
      <div>

      </div>
    </div>
  );
}

export default App;
