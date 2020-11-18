import React from 'react';
import {
  View, Text,
} from 'react-native';
import renderer from 'react-test-renderer';

import Customer from '../src/views/customerList/Customer';

 
describe('--Test Customer component--', () => {
  let testInstance;
  let data;

  beforeEach(() => {
    data = {
      user_id: '123',
      name: 'Joe',
    };
    testInstance = renderer.create(<Customer data={data} />).root;
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Customer data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders expected number of components', () => {
    expect(testInstance.findByType(View)).toBeDefined();
    expect(testInstance.findAllByType(Text).length).toBe(2);
  });

});