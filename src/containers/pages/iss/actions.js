import {
  UPDATE_BASEMAP,
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_NOW,
  FETCH_NOW_SUCCESS,
  FETCH_PASS,
  FETCH_PASS_SUCCESS,
} from './constants';

export const updateBasemap = url => ({ type: UPDATE_BASEMAP, url });

// People
export const fetchPeople = () => ({ type: FETCH_PEOPLE });
export const fetchPeopleSuccess = data => ({
  type: FETCH_PEOPLE_SUCCESS,
  data,
});

// Now
export const fetchNow = () => ({ type: FETCH_NOW });
export const fetchNowSuccess = data => ({
  type: FETCH_NOW_SUCCESS,
  data,
});

// Pass
export const fetchPass = ({ lat, long }) => ({ type: FETCH_PASS, lat, long });
export const fetchPassSuccess = data => ({
  type: FETCH_PASS_SUCCESS,
  data,
});
