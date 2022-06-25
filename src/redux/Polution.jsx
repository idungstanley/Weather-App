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
  dispatch({ type: DETAILS, payload: fetchDetail });
};

export default detailsApi;
