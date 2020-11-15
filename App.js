import React from 'react';
import ReactotronConfig from './src/dev/ReactotronConfig';
import { Provider } from 'react-redux';

import reduxStore from './src/services/reduxStore/initializeStore';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CustomerList from './src/views/customerList/CustomerList';

const App = () => {
  const { store, storeStyle } = reduxStore();
  const { viewStyle } = storeStyle;
  
  return (
    <Provider store={store} style={viewStyle}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <CustomerList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
