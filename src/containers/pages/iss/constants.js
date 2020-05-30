export const ISS_STATE_KEY = 'ISS';
export const UPDATE_BASEMAP = 'ISS/UPDATE_BASEMAP';
export const FETCH_PEOPLE = 'ISS/UPDATE_FETCHPEOPLE';
export const FETCH_PEOPLE_SUCCESS = 'ISS/FETCH_PEOPLE_SUCCESS';
export const FETCH_NOW = 'ISS/FETCH_NOW';
export const FETCH_NOW_SUCCESS = 'ISS/FETCH_NOW_SUCCESS';
export const FETCH_PASS = 'ISS/FETCH_PASS';
export const FETCH_PASS_SUCCESS = 'ISS/FETCH_PASS_SUCCESS';

export const BASEMAPS = [
  {
    Name: 'Open Street Map',
    Url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    Name: 'World Street',
    Url:
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    Name: 'World Topology',
    Url:
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    Name: 'World Imagery',
    Url:
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
];
