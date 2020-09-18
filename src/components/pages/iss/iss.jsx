/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Polyline } from 'react-leaflet';
import styles from './iss.scss';
import { BASEMAPS } from '../../../containers/pages/iss/constants';
import ss from './ss.svg';
import userloc from './userloc.svg';

const ssIcon = L.icon({
  iconUrl: ss,
  iconSize: [30, 30],
  className: 'marker-style',
});

const userlocIcon = L.icon({
  iconUrl: userloc,
  iconSize: [30, 30],
  className: 'marker-style',
});

class ISS extends React.PureComponent {
  constructor(props) {
    super(props);
    this.interval = undefined;
    this.currentUserLocation = {};
  }

  componentDidMount() {
    const { fetchPeople, people, fetchNow } = this.props;
    if (!people || people.length === 0) fetchPeople();
    this.interval = setInterval(fetchNow, 5000);
    this.askLocationPermission();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  askLocationPermission = () => {
    const { fetchPass } = this.props;
    if (window && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.currentUserLocation = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          fetchPass({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        err => {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      );
    }
  };

  // Render tile layer based on selected basemap
  renderTileLayers = () => {
    const { basemap } = this.props;
    return (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={basemap}
      />
    );
  };

  renderBasemapPanel = () => {
    const { basemap, updateBasemap } = this.props;
    return (
      <div className={styles.basemap}>
        <ul>
          {BASEMAPS.map(x => (
            <li
              key={x.Name}
              className={x.Url === basemap && styles.hightlight}
              onClick={() => updateBasemap(x.Url)}
            >
              {x.Name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderPeople = () => {
    const { people } = this.props;
    if (!people || !people.length) return null;
    return (
      <div className={styles.people}>
        <p>{`Currently ${people.length} people are in space.`}</p>
        {people && (
          <div>
            <hr />
            <ul>
              {people.map((x, i) => (
                <li key={x.name}>{`${i + 1}. ${x.name} - ${x.craft}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  renderMarker = () => {
    const {
      currentPosition: { latitude, longitude },
    } = this.props;
    if (!latitude || !longitude) return null;
    return <Marker position={[latitude, longitude]} icon={ssIcon} />;
  };

  renderPassThroughInfo = () => {
    const { pass } = this.props;
    if (!pass) return null;
    return (
      <div className={styles.pass}>
        <p>{`According to your current location (Latitude : ${pass.request.latitude} | Longitude : ${pass.request.longitude}) international space station will pass through ${pass.request.passes} times.`}</p>

        {pass && (
          <div>
            <hr />
            <ul>
              {pass.response.map((x, i) => (
                <li key={x.risetime}>
                  {`${i + 1}. On ${new Date(
                    x.risetime * 1000
                  ).toString()}  in ${x.duration} seconds.`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { lineCoordinates, pass } = this.props;
    const usercurrentPosition = pass
      ? [pass.request.latitude, pass.request.longitude]
      : undefined;
    return (
      <div id="iss" className={styles.iss}>
        {this.renderBasemapPanel()}
        {this.renderPeople()}
        {this.renderPassThroughInfo()}
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
          />
        </Helmet>
        <Map
          center={[
            (usercurrentPosition && usercurrentPosition[0]) || 0,
            (usercurrentPosition && usercurrentPosition[1]) || 0,
          ]}
          style={{ height: '100vh' }}
          zoom={2}
          minZoom={2}
        >
          {this.renderTileLayers()}
          {this.renderMarker()}
          <Polyline color="red" positions={lineCoordinates} />
          {usercurrentPosition && (
            <Marker position={usercurrentPosition} icon={userlocIcon} />
          )}
        </Map>
      </div>
    );
  }
}

ISS.propTypes = {
  basemap: PropTypes.string.isRequired,
  updateBasemap: PropTypes.func.isRequired,
  people: PropTypes.array,
  fetchPeople: PropTypes.func.isRequired,
  fetchNow: PropTypes.func.isRequired,
  currentPosition: PropTypes.object.isRequired,
  lineCoordinates: PropTypes.array.isRequired,
  fetchPass: PropTypes.func.isRequired,
  pass: PropTypes.object,
};

ISS.defaultProps = {
  people: undefined,
  pass: undefined,
};

export default ISS;
