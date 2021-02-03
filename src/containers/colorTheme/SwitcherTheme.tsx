import React, { Component } from 'react';

import styles from '@/containers/colorTheme/SwitcherTheme.scss';

import { connect } from 'react-redux';
import { changeTheme } from '@/action/actionCreator';
class SwitcherTheme extends Component {

  hendelClick = (): void => {
    const { changeTheme } = this.props;
    changeTheme();
  };

  render() {
    return (
      <label htmlFor="checkbox" className={styles['switch']}>
        <input onClick={this.hendelClick} id="checkbox" type="checkbox" />
        <span className={styles['slider']} />
      </label>
    );
  }
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect(null, { changeTheme })(SwitcherTheme);
