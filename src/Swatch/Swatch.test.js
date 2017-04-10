/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Swatch from './Swatch';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Swatch
      color="mediumvioletred"
      onClick={handler}
      size={50}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
