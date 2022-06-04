import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';

// Helmet
import { HELMET_STATE_KEY } from './containers/common/helmet/constants';
import helmetReducer from './containers/common/helmet/reducer';

const createRootReducer = history =>
  combineReducers({
    router: fromJS(connectRouter(history)),
    [HELMET_STATE_KEY]: helmetReducer,
  });

export default createRootReducer;
