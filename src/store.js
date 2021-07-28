import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
 
    return applyMiddleware(thunk, myRouterMiddleware, createLogger())

};

export const store = createStore(reducer, getMiddleware());
