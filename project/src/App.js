import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/register'

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>

      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route exact path ='/register' element={<Register />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
