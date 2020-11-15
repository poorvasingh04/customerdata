import { PACKAGES } from '../actions/constants';
import API_STAGE from '../actions/API_STAGE';

const INITIAL_STATE = {
  isFetching: false,
  data: null,
  error: null,
}

export default function (state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case `${PACKAGES}${API_STAGE.PENDING}`:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case `${PACKAGES}${API_STAGE.FULFILLED}`:
      const { data } = payload;
      return {
        isFetching: false,
        data,
        error: null,
      };
    case `${PACKAGES}${API_STAGE.REJECTED}`:
      const { errorCode, Error } = payload;
      return {
        data: [],
        isFetching: false,
        error: { errorCode: errorCode || Error },
      };
    default:
      return state;
  };
}