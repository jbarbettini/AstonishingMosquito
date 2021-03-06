import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Store from './Store.js';
import App from './App.js';
import GameView from './resources/gameView/GameView';
import LibraryView from './resources/libraryView/LibraryView';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LibraryView}/>
        <Route path='game/:fileName' component={GameView}/>
        <Route path='*' component={LibraryView} />
      </ Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
