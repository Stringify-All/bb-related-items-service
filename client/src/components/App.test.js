/* eslint-disable import/extensions */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { testScheduler } from 'jest';
import RelatedItems from './App.jsx';

configure({ adapter: new Adapter() });
test('rendering the app component', () => {
  const wrapper = shallow(
    <RelatedItems />,
  );
  expect(wrapper).toMatchSnapshot();
});
