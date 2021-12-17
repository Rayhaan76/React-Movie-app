import React, { useState } from 'react';


import { SearchResults } from '../SearchResults/SearchResults';

import './App.css';



const App = () => {

  const [fullList, setFullList] = useState([
    {id: 1, title: 'A Movie 1', rating: 60},
    {id: 2, title: 'B Movie 2', rating: 70},
    {id: 3, title: 'C Movie 3', rating: 50},
    {id: 4, title: 'D Movie 4', rating: 100},
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        Comedy Movies
      </header>
        <SearchResults fullList={fullList} setFullList={setFullList}/>
      <div>

      </div>
    </div>
  );
}

export default App;
