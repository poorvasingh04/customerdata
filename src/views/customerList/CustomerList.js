import React, { useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppConstants from '../../constants/AppConstants';
import AppStrings from '../../constants/AppStrings';
import { fetchCustomerData } from '../../services/actions';
import distanceFromDublinOffice from '../../utils/DistanceCalculator';
import Customer from './Customer';
import style from './style';

const {
  rowStyle,
  headerTextStyle,
  colHeaderTextStyle,
} = style;

const {
  userIdString,
  nameString,
  listHeaderString,
} = AppStrings;

function CustomerList() {

  const dispatch = useDispatch();
  const customerData = useSelector(state => state.CustomerData.data);

  const isValidCustomer = (customer) => {
    const distance = distanceFromDublinOffice(customer);
    return distance <= AppConstants.MAX_DISTANCE;
  }

  const filteredCustomerData = (customerData && customerData
                                .filter(customer => isValidCustomer(customer))
                                .sort((a,b) => a.user_id-b.user_id)) || [];

  useEffect(() => {
    let cancel = false;
    const runEffect = async () => {      
      if (cancel) {
        return;
      }
      
      dispatch(fetchCustomerData());
               
    };
    runEffect();
  
    return () => {
      cancel = true;
      
    }
  }, []);

  const renderCustomer = ({ item }) => {
    return (
      <Customer
        data={item}
      />
    );
  }

  const renderHeader = () => {
    return (
      <View>
        <Text style={headerTextStyle}>
          { listHeaderString }
        </Text>
        <View style={rowStyle}>
          <Text style={colHeaderTextStyle}>
            {userIdString}
          </Text>
          <Text style={colHeaderTextStyle}>
            { nameString }
          </Text>
        </View>
      </View>
      
    );
  }

  return (
    <FlatList
      data={filteredCustomerData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderCustomer}
      ListHeaderComponent={renderHeader}
    />
  );
}

export default CustomerList;