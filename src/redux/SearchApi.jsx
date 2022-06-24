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
    }) => ({
      countryName: countryName.common,
      population,
      maps: maps.googleMaps,
      timezones,
      latlng,
      coatOfArms: coatOfArms.png,
      continents,
      flags: flags.png,
    }),
  );
  dispatch({ type: CONTINENT, payload: filterRegionData });
};

export default ApiReducer;
