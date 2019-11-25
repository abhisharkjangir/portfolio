import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';

// Home Page
import { HOME_STATE_KEY } from './containers/pages/home/constants';
import homeReducer from './containers/pages/home/reducers';
// Helmet
import { HELMET_STATE_KEY } from './containers/common/helmet/constants';
import helmetReducer from './containers/common/helmet/reducer';

const createRootReducer = history =>
  combineReducers({
    router: fromJS(connectRouter(history)),
    [HOME_STATE_KEY]: homeReducer,
    [HELMET_STATE_KEY]: helmetReducer,
  });

export default createRootReducer;
