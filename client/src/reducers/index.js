import {combineReducers} from 'redux';
import {inventory} from './inventory';
import {user} from './user';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({inventory, user, routing: routerReducer, form: formReducer});
export default reducer