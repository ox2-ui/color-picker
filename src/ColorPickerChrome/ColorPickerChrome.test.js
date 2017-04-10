/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ColorPickerChrome from './ColorPickerChrome';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <ColorPickerChrome
      disableAlpha={true}
      onChange={handler}
      value={{ hex: '#FE8057' }}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
