
import Reg from './components/registration';
import React, {useState} from 'react';
import './App.css';
import BasicExample from './components/navbar';

import Data from './components/cardData';
import Card from './components/card'
import Buttons from './components/button';

function App() {

  const [item, setItem] = useState(Data);

  //Set() is used so the values are not repeated, only unique values will show
  const menuItems = [...new Set(Data.map((Val) => Val.location))];

  //Filter will receive a value from click and compare with all the category in the database, if it is the same, then it will show the item card.
  
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.location === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="App">

      <header className="App-header">
        <BasicExample />
      </header>

      <main>
      <div className="container-fluid">
        <div className="row">
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>

        {Reg()}
      </main>

    </div>
  );
}

export default App;