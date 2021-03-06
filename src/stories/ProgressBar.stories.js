import React from 'react';

import { storiesOf } from '@storybook/react';

import { Text, ProgressBar } from 'components';

storiesOf('ProgressBar', module).add('ProgressBar', () => (
  <div class="sb-page-wrapper">
    <Text
      className={'sb-component-group-heading'}
      typeScale="h1"
      color="purple"
      weight="fontWeight-bold"
    >
      ProgressBar
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      ProgressBar component takes <code>percent</code> as its primary prop to
      display an animated bar. It can also choose to display the percent
      numerically, and is color configurable. The ProgressBar component will
      fill the available width of its container and thus can be width controlled
      with a parent container class or attaching a width-override class directly
      with the <code>className</code> prop.
    </Text>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Percent
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>percent</code> prop determines the length of the colored
      progress bar. The bar animates from 0 to the percent on component mount.
      It will also animate between percentages should the prop change after
      mounting.
    </Text>

    <div class="sb-component-group">
      <div class="sb-component-container">
        <ProgressBar percent={0} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={33} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={66} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={100} />
      </div>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Display Percent
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>displayPercent</code> prop determines whether to show the
      percentage as a number next to the bar.
    </Text>

    <div class="sb-component-group">
      <ProgressBar displayPercent={false} percent={50} />
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Colors
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>color</code> prop determines the color of the progress bar. It's
      values match those used elsewhere and can be one of the following
      <code>'purple'</code> <code>'blue'</code> <code>'orange'</code>
      <code>'green'</code> <code>'red'</code> <code>'black'</code>
      <code>'white'</code> <code>'defaultGrey'</code> <code>'lightGrey'</code>
      <code>'darkGrey'</code>
      The default value is <code>'purple'</code>
    </Text>

    <div class="sb-component-group">
      <div class="sb-component-container">
        <ProgressBar percent={50} color={'blue'} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={50} color={'green'} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={50} color={'orange'} />
      </div>
      <div class="sb-component-container">
        <ProgressBar percent={50} color={'darkGrey'} />
      </div>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Controlling Width
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The component fills the available space but can be controlled with a
      parent container width/max-width or a width-override class using the
      <code>className</code> prop. The ProgressBar has a minimum width of 6rem.
    </Text>

    <div class="sb-component-group">
      <div class="sb-component-container" style={{ width: '75%' }}>
        <ProgressBar percent={50} />
      </div>
    </div>
  </div>
));
