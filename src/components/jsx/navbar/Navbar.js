import React from 'react';
import Hamburger from './hamburger/Hamburger';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Hamburger />
      </nav>
    );
  }
}

export default Navbar;