import { bold } from 'chalk';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const style = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
  },
  headerTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  textStyle: {
    fontSize: 16,
    flexGrow: 1,
    margin: 5,
    width: width/2 - 40,
  },
  colHeaderTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    flexGrow: 1,
    margin: 5,
    width: width/2 - 40,
  }
})

export default style;