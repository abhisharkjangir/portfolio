import { combineReducers } from 'redux';

// Helmet
import helmetReducer from './shared/helmet/reducer';
import { HELMET_STATE_KEY } from './shared/helmet/constants';

const createRootReducer = () =>
  combineReducers({
    [HELMET_STATE_KEY]: helmetReducer,
  });

export default createRootReducer;
