import React from 'react';
import { BrowserRouter, Link, Switch, Route, Render } from 'react-router-dom'
import { useState, useCallback, useMemo } from 'react'
import './styles.css';
import { Home } from './Home'
import { Page1 } from './Page1'
import { Page1DetailA } from './Page1DetailA'
import { Page1DetailB } from './Page1DetailB'
import { Page2 } from './Page2'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1"
          render={() => {
            <Switch>
              <Route exact path="/page1">
                <Page1 />
              </Route>
              <Route path="/page1/detaila">
                <Page1DetailA />
              </Route>
              <Route path="/page1/detailb">
                <Page1DetailB />
              </Route>
            </Switch>
          }} />
        <Route path="/page2" render={() => { <Page2 /> }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
