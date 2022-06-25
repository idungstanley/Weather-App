import getCountryData, { fetchDetails } from '../service/ApiRequest';

// Actions
const CONTINENT = 'weather/searchApi/CONTINENT';
const DETAILS = 'weather/searchApi/DETAILS';

// Reducer
const ApiReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CONTINENT:
      return action.payload;
    case DETAILS:
      return state.map((country) => {
        if (country.id === action.payload) {
          return country;
        }
        return state;
      });
    default:
      return state;
  }
};

// Action creation
export const loadApiData = () => async (dispatch) => {
  const RegionApi = await getCountryData();
  console.log(RegionApi);
  const filterRegionData = RegionApi.map(
    ({
      name: countryName,
      latlng,
      coatOfArms,
      continents,
      flags,
      maps,
      population,
      timezones,
      ccn3: id,
    }) => ({
      countryName: countryName.common,
      population,
      maps: maps.googleMaps,
      timezones,
      lat: latlng[0],
      lon: latlng[1],
      coatOfArms: coatOfArms.png,
      continents,
      flags: flags.png,
      id,
    }),
  );
  console.log(filterRegionData);
  dispatch({ type: CONTINENT, payload: filterRegionData });
};

export const getDetails = (id, lat, lon) => async (dispatch) => {
  dispatch({ type: DETAILS, payload: id });
  const fetchDetail = await fetchDetails(lat, lon);
  return fetchDetail;
};
export default ApiReducer;
