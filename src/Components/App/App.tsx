import React, { FC, useState } from 'react';
import { Greet } from '../greet/greet';
import './App.css';


const App = () => {

  const [fullList, setFullList] = useState([
    {id: 1, title: 'Movie 1', rating: 60},
    {id: 2, title: 'Movie 2', rating: 70},
    {id: 3, title: 'Movie 3', rating: 50},
    {id: 4, title: 'Movie 4', rating: 100},
  ])

  const [state, setState] = useState('test');

  return (
    <div className="App">
      <header className="App-header">
        Comedy Movies
      </header>
        <Greet fullList={fullList}/>
      <div>

      </div>
    </div>
  );
}

export default App;
