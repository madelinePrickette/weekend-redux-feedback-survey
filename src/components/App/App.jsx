import React from 'react';
import axios from 'axios';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//COMPONENTS IMPORTS
import Admin from '../Admin/Admin.jsx';
import Comments from '../Comments/Comments.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';
import Supported from '../Supported/Supported.jsx';
import Understanding from '../Understanding/Understanding.jsx';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/comments">
        <Comments />
      </Route>

      <Route path="/" exact>
        <Feeling />
      </Route>

      <Route path="/review">
        <Review />
      </Route>

      <Route path="/success">
        <Success />
      </Route>

      <Route path="/supported">
        <Supported />
      </Route>

      <Route path="/understanding">
        <Understanding />
      </Route>
    </Router>
  );
}

export default App;
