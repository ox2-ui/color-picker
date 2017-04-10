import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ColorPickerChrome from './ColorPickerChrome';

const handler = (value) => console.log('🍇', value); // eslint-disable-line no-console

storiesOf('ColorPickerChrome', module)
  .add('default', () => (
    <ColorPickerChrome
      onChange={handler}
      value={''}
    />
  ))
  .add('coral', () => (
    <ColorPickerChrome
      disableAlpha={true}
      onChange={handler}
      value={{ hex: '#FE8057' }}
    />
  ));
