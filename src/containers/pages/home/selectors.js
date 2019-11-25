import { createSelector } from 'reselect';
import { HOME_STATE_KEY } from './constants';

export const homeState = state => state.get(HOME_STATE_KEY);

export const isUsersFetching = () =>
  createSelector(homeState, state => state.get('isFetching'));
export const getUsersData = () =>
  createSelector(homeState, state => state.get('data').toJS());
