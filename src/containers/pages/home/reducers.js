import { fromJS } from 'immutable';
import {
  FETCHING_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './constants';

const initialState = fromJS({
  isfetching: false,
  data: fromJS([]),
  error: null,
});

const homeReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCHING_USERS:
      return state.set('isFetching', true);
    case FETCH_USERS_SUCCESS:
      return state.set('isFetching', false).set('data', fromJS(data));
    case FETCH_USERS_ERROR:
      return state
        .set('isFetching', false)
        .set('data', fromJS([]))
        .set('error', data);
    default:
      return state;
  }
};

export default homeReducer;
