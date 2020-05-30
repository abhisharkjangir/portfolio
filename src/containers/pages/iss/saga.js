/* eslint-disable no-console */
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_PEOPLE, FETCH_NOW, FETCH_PASS } from './constants';
import {
  fetchPeopleSuccess,
  fetchNowSuccess,
  fetchPassSuccess,
} from './actions';
import apiService from '../../../utils/apiService';

function* fetchPeople() {
  try {
    const { data, status } = yield call(apiService, {
      method: 'GET',
      url: 'people',
    });
    if (status === 200) {
      return yield put(fetchPeopleSuccess(data.people));
    }
    return console.error({ status, data });
  } catch (error) {
    return console.error(error);
  }
}

function* fetchNow() {
  try {
    const { data, status } = yield call(apiService, {
      method: 'GET',
      url: 'now',
    });
    if (status === 200) {
      return yield put(fetchNowSuccess(data));
    }
    return console.error({ status, data });
  } catch (error) {
    return console.error(error);
  }
}

function* fetchPass({ lat, long }) {
  try {
    const { data, status } = yield call(apiService, {
      method: 'GET',
      url: 'pass',
      appendUrl: `?lat=${lat}&lon=${long}`,
    });
    if (status === 200) {
      return yield put(fetchPassSuccess(data));
    }
    return console.error({ status, data });
  } catch (error) {
    return console.error(error);
  }
}

function* issSaga() {
  yield takeLatest(FETCH_PEOPLE, fetchPeople);
  yield takeLatest(FETCH_NOW, fetchNow);
  yield takeLatest(FETCH_PASS, fetchPass);
}

export default issSaga;
