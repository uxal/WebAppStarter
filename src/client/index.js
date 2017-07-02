/**
 * Main index file of the client react app
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import AppRouter from './routes';

function test1(){
    return (<div>DUDU</div>);
}

function test2(){
    return (<div>ARE voodo</div>);
}

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <AppRouter />



    </Provider>
    , document.querySelector('#app'));

