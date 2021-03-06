import React from 'react';

import { storiesOf } from '@storybook/react';

import { Loader, Text } from 'components';

storiesOf('Loader', module).add('Loader', () => (
  <div className="sb-page-wrapper">
    <Text
      className={'sb-component-group-heading'}
      typeScale="h1"
      color="purple"
      weight="fontWeight-bold"
    >
      Loader
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      Loader components will show a simple loader that can be customized.
    </Text>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      size
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>size</code> prop will determine the size of the loader. It can
      be <code>small</code> or <code>medium</code>. The default value is{' '}
      <code>small</code>.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Loader size="small" />
      <br />
      <Loader size="medium" />
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      color
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>color</code> prop will determine the color of the loader. It can
      be <code>blue</code> or <code>white</code>. The default value is{' '}
      <code>blue</code>.
    </Text>

    <div
      className="sb-component-group sb-button-group"
      style={{ backgroundColor: '#ccc' }}
    >
      <Loader color="blue" />
      <br />
      <Loader color="white" />
    </div>
  </div>
));
