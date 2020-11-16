import React from 'react';
import styles from './Hamburger.module.css';

class Hamburger extends React.Component {
  render() {
    return (
      <div className={styles.menu_toggle}>
        <span></span>
      </div>
    );
  }
}

export default Hamburger;