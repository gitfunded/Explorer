import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Text } from 'components';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { faBell } from '@fortawesome/pro-light-svg-icons';

storiesOf('Button', module).add('All Buttons', () => (
  <div className="sb-page-wrapper">
    <Text
      className={'sb-component-group-heading'}
      typeScale="h1"
      color="purple"
      weight="fontWeight-bold"
    >
      Buttons
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      Button components take props to define their type, icon, disabled and
      loading states, and how they should occupy space.
    </Text>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Type
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>type</code> prop will determine the type of button when applied
      to an instance.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Button onClick={action('clicked')}>Default</Button>

      <Button onClick={action('clicked')} type="primary">
        Primary
      </Button>

      <Button onClick={action('clicked')} type="destructive">
        Destructive
      </Button>

      <Button onClick={action('clicked')} type="action">
        Action
      </Button>

      <Button onClick={action('clicked')} type="link">
        Link
      </Button>

      <Button onClick={action('clicked')} type="link-destructive">
        Link-Destructive
      </Button>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Icon
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>icon</code> prop will define whether or not a button contains an
      icon.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Button onClick={action('clicked')} type="primary" icon={faPlus}>
        Create new bounty
      </Button>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Disabled
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>disabled</code> prop will disabled the button, rendering it
      unclickable.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Button onClick={action('should not fire')} disabled>
        Default
      </Button>

      <Button onClick={action('should not fire')} disabled type="primary">
        Primary
      </Button>

      <Button onClick={action('should not fire')} disabled type="destructive">
        Destructive
      </Button>

      <Button onClick={action('should not fire')} disabled type="action">
        Action
      </Button>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Loading
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>loading</code> prop will display a loading state for the button,
      useful for displaying upon submission of forms or inputs.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Button loading>Default</Button>

      <Button loading type="primary" icon={faBell}>
        Primary
      </Button>

      <Button loading type="destructive" icon={faBell}>
        Destructive
      </Button>

      <Button loading type="action" icon={faBell}>
        Action
      </Button>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      Fit Width
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>fitWidth</code> prop will cause the button to span the
      full-width of its parent container.
    </Text>

    <div className="sb-component-group">
      <Button fitWidth type="primary">
        Full-width button
      </Button>
    </div>

    <Text
      className={'sb-component-group-subheading'}
      typeScale="h3"
      weight="fontWeight-bold"
    >
      margin
    </Text>

    <Text
      className={'sb-component-group-description'}
      typeScale="Body"
      lineHeight="lineHeight-default"
    >
      The <code>margin</code> prop will add a 1rem margin to the button.
    </Text>

    <div className="sb-component-group sb-button-group">
      <Button margin type="primary">
        Button with extra margin
      </Button>
      <Button margin type="primary">
        Button with extra margin
      </Button>
    </div>
  </div>
));
