
import Reg from './components/registration';
import React from 'react';
import './App.css';
import BasicExample from './components/navbar';
import Filter from './components/filter';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <BasicExample />
      </header>
      <main>
        <Filter />
        {Reg()}
      </main>
    </div>
  );
}

export default App;