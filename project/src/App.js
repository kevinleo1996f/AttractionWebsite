import Reg from "./components/registration";
import Login from "./components/Login";
import "./App.css";
import BasicExample from "./components/navbar";
import Filter from "./components/filter";
import Reset from "./components/resetPassword";
import CardPopUp from "./components/cardPopUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample />
      </header>

      <main>
        <CardPopUp />
        <Filter />
        {Reg()}
        {Login()}
        {Reset()}
        
      </main>
    </div>
  );
}

export default App;
