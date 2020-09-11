import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Timeline from '../Timeline/Timeline';
import NewPost from '../NewPost/NewPost';
import Navbar from '../Navbar/Navbar';

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main className="App-content">
          <Switch>
            <Route path="/new-post">
              <NewPost />
            </Route>
            <Route path="/">
              <Timeline />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
