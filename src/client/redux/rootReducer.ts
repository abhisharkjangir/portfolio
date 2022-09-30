import { combineReducers } from 'redux';

// Helmet
import helmetReducer from '@shared/Helmet/reducer';
import { HELMET_STATE_KEY } from '@shared/Helmet/constants';

const createRootReducer = () =>
  combineReducers({
    [HELMET_STATE_KEY]: helmetReducer,
  });

export default createRootReducer;
