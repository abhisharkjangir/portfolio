import { fromJS } from 'immutable';
import {
  BASEMAPS,
  UPDATE_BASEMAP,
  FETCH_PEOPLE_SUCCESS,
  FETCH_NOW_SUCCESS,
  FETCH_PASS_SUCCESS,
} from './constants';

const initialState = fromJS({
  basemap: BASEMAPS[0].Url,
  people: [],
  currentPosition: {},
  lineCoordinates: [],
  pass: undefined,
});

const issReducer = (state = initialState, { type, url, data }) => {
  switch (type) {
    case UPDATE_BASEMAP:
      return state.set('basemap', url);

    case FETCH_PEOPLE_SUCCESS:
      return state.set('people', fromJS(data));

    case FETCH_NOW_SUCCESS:
      return state
        .set('currentPosition', fromJS({ ...data.iss_position }))
        .set(
          'lineCoordinates',
          fromJS([
            ...state.get('lineCoordinates').toJS(),
            [
              Number(data.iss_position.latitude),
              Number(data.iss_position.longitude),
            ],
          ])
        );

    case FETCH_PASS_SUCCESS:
      return state.set('pass', fromJS(data));
    default:
      return state;
  }
};

export default issReducer;
