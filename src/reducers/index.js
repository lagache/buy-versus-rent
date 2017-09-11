import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import BuyVSRent from './BuyVSRent';

const rootReducer = combineReducers({
    BuyVSRent,
    router: routerStateReducer
});

export default rootReducer;