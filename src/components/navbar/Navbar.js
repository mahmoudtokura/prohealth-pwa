import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Prohealth App
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
    </div>
  );
};

export default Navbar;
