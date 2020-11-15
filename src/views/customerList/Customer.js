import { func } from 'prop-types';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import style from './style';

const {
  rowStyle,
  textStyle,
} = style;

function Customer({
  data,
}) {

  const { user_id, name } = data;

  return (
    <View style={rowStyle}>
      <Text style={textStyle}>
        {user_id}
      </Text>
      <Text style={textStyle}>
        { name }
      </Text>
    </View>
  );
}

export default Customer;