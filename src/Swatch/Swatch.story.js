import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Swatch from './Swatch';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('Swatch', module)
  .add('default', () => <Swatch />)
  .add('coral', () => <Swatch color="coral" />)
  .add('size 50', () => <Swatch color="coral" size={50} />)
  .add('onClick', () => (
    <Swatch color="mediumvioletred" onClick={handler} />
  ))
  .add('yellowgreen', () => <Swatch color="yellowgreen" />);
