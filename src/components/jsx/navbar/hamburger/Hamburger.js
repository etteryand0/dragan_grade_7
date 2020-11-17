import React from 'react';
import styles from './Hamburger.module.css';

class Hamburger extends React.Component {
  animate() {
    // animate navbar
    const w =  window.innerWidth;
    let navbar = document.querySelector("nav");
    let body = document.querySelector("body");
    navbar.setAttribute("style", `background: linear-gradient(90deg, gray ${w-26-8}px, #1C00ff00 32px);`);
    navbar.classList.toggle("Navbar_active__1iWQX");

    // animate Hamburger
    let ham = document.querySelector(`.${styles.menu_toggle}`);

    // check if hamburger clicked
    ham.toggleAttribute("clicked");
    if ( ham.hasAttribute("clicked") ) {
      ham.setAttribute("style", `left: ${window.innerWidth-26-4}px`);
      body.setAttribute("style", 'overflow-y:hidden');
    } else {
      ham.removeAttribute("style");
      body.removeAttribute("style");
    }
  }

  render() {
    return (
      <div className={styles.menu_toggle}>
        <input id="clickListener" type="checkbox" onClick={this.animate} />
        <span className={[styles.hamburger, styles.stick_1].join(" ")}></span>
        <span className={[styles.hamburger, styles.stick_2].join(" ")}></span>
        <span className={[styles.hamburger, styles.stick_3].join(" ")}></span>
      </div>
    );
  }
}

export default Hamburger;