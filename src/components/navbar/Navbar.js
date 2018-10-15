import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Prohealth
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">About</a>
            </li>
            <li>
              <a href="badges.html">Management</a>
            </li>
            <li>
              <a href="collapsible.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
