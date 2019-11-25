import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_USERS } from './constants';
import { fetchUserError, fetchingUsers, fetchUserSuccess } from './actions';
import apiService from '../../../utils/apiService';

function* fetchUsers() {
  try {
    yield put(fetchingUsers());
    const { data, status } = yield call(apiService, {
      method: 'GET',
      url: 'users',
    });
    if (status === 200) {
      return yield put(fetchUserSuccess(data.data));
    }
    return yield put(fetchUserError('Somthing went wrong!'));
  } catch (error) {
    return yield put(fetchUserError(error));
  }
}

function* homeSaga() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export default homeSaga;
