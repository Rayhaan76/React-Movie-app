import React, { useEffect, useState } from 'react';

import { getComedyMovies } from '../Moviedb/Moviedb';
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

  return (
    <div className="App">
      <header className="App-header">
        Comedy Movies
      </header>
        <SearchResults />
      <div>

      </div>
    </div>
  );
}

export default App;
