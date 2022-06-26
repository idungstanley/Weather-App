import { fetchDetails } from '../service/ApiRequest';

const DETAILS = 'weather/searchApi/DETAILS';

// Reducer
const detailsApi = (state = {}, action = {}) => {
  switch (action.type) {
    case DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const getDetails = (lat, lon) => async (dispatch) => {
  const fetchDetail = await fetchDetails(lat, lon);
  const { main, components, dt } = fetchDetail.list[0];
  const filterData = {
    aqi: main.aqi,
    components,
    dt,
  };
  dispatch({ type: DETAILS, payload: filterData });
};

export default detailsApi;
