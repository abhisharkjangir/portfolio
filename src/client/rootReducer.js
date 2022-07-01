import { combineReducers } from 'redux';

// Helmet
import helmetReducer from './components/common/helmet/reducer';
import { HELMET_STATE_KEY } from './components/common/helmet/constants';
// SSR
import ssrReducer from './components/pages/ssr/reducer';
import { SSR_STATE_KEY } from './components/pages/ssr/constant';

const createRootReducer = () =>
  combineReducers({
    [HELMET_STATE_KEY]: helmetReducer,
    [SSR_STATE_KEY]: ssrReducer,
  });

export default createRootReducer;
