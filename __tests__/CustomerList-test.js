import React from 'react';
import { FlatList } from 'react-native';
import renderer from 'react-test-renderer';

import CustomerList from '../src/views/customerList/CustomerList';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  const mockSelector = jest.fn();
  mockSelector.mockReturnValue(require('./data.json'));
  
  return {
    useSelector: mockSelector,
    useDispatch: () => mockDispatch
  }
});
 
describe('--Test CustomerList component--', () => {
  let testInstance;

  beforeEach(() => {
    testInstance = renderer.create(<CustomerList />).root;
  });

  it('renders correctly', () => {
    const tree = renderer.create(<CustomerList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test filtered data values', () => {
    const data = testInstance.findByType(FlatList).props.data;
    expect(data.length).toBe(1)
  });

});