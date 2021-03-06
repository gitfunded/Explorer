import React from 'react';
import styles from './Settings.module.scss';
import UserSettings from './UserSettings';
import EmailPreferences from './EmailPreferences';
import { PageCard } from 'explorer-components';
import intl from 'react-intl-universal';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageCard>
          <PageCard.Header>
            <PageCard.Title>
              {intl.get('sections.settings.title')}
            </PageCard.Title>
          </PageCard.Header>
          <PageCard.Content key="profile" className={styles.cardContent}>
            <UserSettings />
          </PageCard.Content>
        </PageCard>
        <PageCard noBanner>
          <PageCard.Content key="email" className={styles.cardContent}>
            <EmailPreferences
              handleEmail={() => this.setState({ submitNotPressed: false })}
              onChange={() => this.setState({ dirty: true })}
            />
          </PageCard.Content>
        </PageCard>
      </div>
    );
  }
}

export default Settings;
