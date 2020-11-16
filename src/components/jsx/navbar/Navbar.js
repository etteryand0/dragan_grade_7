import React from 'react';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className={styles.menu_toggle}>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default Navbar;