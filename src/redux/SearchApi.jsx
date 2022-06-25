import getCountryData from '../service/ApiRequest';

// Actions
const CONTINENT = 'weather/searchApi/CONTINENT';
// Reducer
const ApiReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CONTINENT:
      return action.payload;
    default:
      return state;
  }
};

// Action creation
export const loadApiData = () => async (dispatch) => {
  const RegionApi = await getCountryData();
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
  dispatch({ type: CONTINENT, payload: filterRegionData });
};

export default ApiReducer;
