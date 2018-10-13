import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="blue">
        <div className="nav-wrapper">
          <a href="#" data-activates="slide-out" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <a href="#" className="brand-logo">
            Prohealth
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="side-nav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="images/office.jpg" />
            </div>
            <a href="#!user">
              <img className="circle" src="images/yuna.jpg" />
            </a>
            <a href="#!name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#!email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">cloud</i>
            First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
