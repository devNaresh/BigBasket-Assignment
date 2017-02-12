import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './container/homeContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, {history} from './store'
import {Provider} from 'react-redux'
import {Router, Route, Link, IndexRoute} from 'react-router'
import {loadInventory} from './actions/inventoryAction'

const onEnterHome = () => {
  store.dispatch(loadInventory());
};

const App = () => (
  <MuiThemeProvider>
    <HomeContainer/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App} onEnter={() => onEnterHome()}>
      <IndexRoute component={App}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'))
