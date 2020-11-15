import { CUSTOMER_DATA } from '../actions/constants';
import API_STAGE from '../actions/API_STAGE';
import convertToJSON from '../../utils/TxtToJSONConvertor';

const INITIAL_STATE = {
  isFetching: false,
  data: null,
  error: null,
}

export default function (state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case `${CUSTOMER_DATA}${API_STAGE.PENDING}`:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case `${CUSTOMER_DATA}${API_STAGE.FULFILLED}`:
      const { data } = payload;
      const jsondata = convertToJSON(data);

      return {
        isFetching: false,
        data: jsondata,
        error: null,
      };
    case `${CUSTOMER_DATA}${API_STAGE.REJECTED}`:
      return {
        data: [],
        isFetching: false,
        error: {
          message: 'Failed to load data'
        },
      };
    default:
      return state;
  };
}