import {
  CUSTOMER_DATA
} from './constants';
import API_CONSTANTS from '../API_CONSTANTS';
import APIService from './APIService';
import RestMethodType from './RestMethodType';

const { GET } = RestMethodType;

const fetchCustomerData = () => dispatch => {
  const {
    customerData,
  } = API_CONSTANTS;

  const config = {
    method: GET,
  };

  APIService(dispatch, CUSTOMER_DATA, customerData, config);
}

export {
  fetchCustomerData,
};