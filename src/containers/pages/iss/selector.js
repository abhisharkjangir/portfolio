import { createSelector } from 'reselect';
import { ISS_STATE_KEY } from './constants';

export const issState = state => state.get(ISS_STATE_KEY);

export const selectBasemap = createSelector(issState, state =>
  state.get('basemap')
);

export const selectPeople = createSelector(issState, state =>
  state.get('people').toJS()
);

export const selectCurrentPosition = createSelector(issState, state =>
  state.get('currentPosition').toJS()
);

export const selectLineCoordinates = createSelector(issState, state =>
  state.get('lineCoordinates').toJS()
);

export const selectPass = createSelector(issState, state => {
  const pass = state.get('pass');
  return pass ? pass.toJS() : undefined;
});
