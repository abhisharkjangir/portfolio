import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ISSComponent from '../../../components/pages/iss/iss';
import {
  selectBasemap,
  selectPeople,
  selectCurrentPosition,
  selectLineCoordinates,
  selectPass,
} from './selector';
import { updateBasemap, fetchPeople, fetchNow, fetchPass } from './actions';

const ISS = props => <ISSComponent {...props} />;

const mapStateToProps = createStructuredSelector({
  basemap: selectBasemap,
  people: selectPeople,
  currentPosition: selectCurrentPosition,
  lineCoordinates: selectLineCoordinates,
  pass: selectPass,
});

const mapDispatchToProps = d => ({
  updateBasemap: url => d(updateBasemap(url)),
  fetchPeople: () => d(fetchPeople()),
  fetchNow: () => d(fetchNow()),
  fetchPass: ({ lat, long }) => d(fetchPass({ lat, long })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISS);
