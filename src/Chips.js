import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';


function Chips(){

    return(
        <div>
        <h1>You Ordered Chips!</h1>
        {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Route exact path="/">

        </Route>
        </BrowserRouter> */}
        </div>

    )
};

export default Chips;