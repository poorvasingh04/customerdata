import axios from 'axios';
import API_CONSTANTS from '../API_CONSTANTS';
import API_STAGE from './API_STAGE';

const {
  PENDING,
  FULFILLED,
  REJECTED,
} = API_STAGE;

const APIResponse =  (action, apiStage, data = null) => {
  return {
    type: `${action}${apiStage}`,
    payload: data,
  }
};

const APIService = (dispatch, action, apiURL, configObj) => {
  const {
    baseURL,
  } = API_CONSTANTS;
  const url = baseURL + apiURL;

  dispatch(APIResponse(action, PENDING));
  const config = {
    url,
    ...configObj
  };

  axios(config)
    .then(res => {
      const { data } = res || {};
      if (data && data.errors) {
        dispatch(APIResponse(action, REJECTED, res.errors));

      }  
      else {
        dispatch(APIResponse(action, FULFILLED, res));
      }
    })
    .catch(error => {
      dispatch(APIResponse(action, REJECTED, error));
  });
};

export default APIService;