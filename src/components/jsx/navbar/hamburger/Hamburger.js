import React from 'react';
import styles from './Hamburger.module.css';

class Hamburger extends React.Component {
  render() {
    return (
      <div className={styles.menu_toggle}>
        <input type="checkbox" />
        <span className={[styles.hamburger, styles.stick_1].join(" ")}></span>
        <span className={[styles.hamburger, styles.stick_2].join(" ")}></span>
        <span className={[styles.hamburger, styles.stick_3].join(" ")}></span>
      </div>
    );
  }
}

export default Hamburger;