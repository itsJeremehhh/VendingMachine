import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';

//vending option
import Chips from "./Chips";
import Soda from './Soda';
import Cookies from './Cookies';
//import //css files;

function App() {

  return (
    <main className='App'>
      <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/cookie">Cookie</Link>
      </nav>

      <Route exact path='/chips'>
       <Chips />
      </Route>   

      <Route exact path="/soda">
       <Soda />
      </Route>

      <Route exact path="/cookie">
       <Cookies />
      </Route>
    

      </BrowserRouter>
    </main>

  );
}

export default App;
