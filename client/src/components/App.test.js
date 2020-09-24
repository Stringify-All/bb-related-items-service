/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import { testScheduler } from 'jest';
import RelatedItems from './App.jsx';

configure({ adapter: new Adapter() });
test('rendering the app component', () => {
  const wrapper = shallow(
    // eslint-disable-next-line react/jsx-filename-extension
    <RelatedItems />,
  );
  expect(wrapper).toMatchSnapshot();
});

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});
