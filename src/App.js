import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Pages/Home';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import Navigation from './components/Navigation';
import Login from './components/Pages/Login';
import Listing from "./components/Pages/Listing"
import PrivateRoute from "./components/PrivateRoute"

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/submissions">
              <Listing />
            </PrivateRoute>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
