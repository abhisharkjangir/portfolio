import {
  FETCH_USERS,
  FETCHING_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './constants';

export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchingUsers = () => ({ type: FETCHING_USERS });
export const fetchUserSuccess = data => ({ type: FETCH_USERS_SUCCESS, data });
export const fetchUserError = data => ({ type: FETCH_USERS_ERROR, data });
