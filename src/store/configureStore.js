//import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
//import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
//import { devTools } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
//import createHistory from 'history/createHashHistory';
//import { Route } from 'react-router';

//import App from './../App';

// Configure routes like normal
// const routes = (
//   <Route path="/" component={App}>
//   </Route>
// );

const createStoreWithMiddleware = compose(
    // Save for redux middleware
    applyMiddleware(thunkMiddleware),
    // reduxReactRouter({
    //     routes,
    //     createHistory
    // }),
    //devTools()
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}