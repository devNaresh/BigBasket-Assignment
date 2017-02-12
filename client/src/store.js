import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import cookie from 'react-cookie';
import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const userLogin = store => next => action => {
    if (cookie.load('token') && action.type!=="admin") {
        store.dispatch({type: "admin"})
    }
    return next(action)
}
const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk, userLogin)))
export const history = syncHistoryWithStore(browserHistory, store)
export default store
