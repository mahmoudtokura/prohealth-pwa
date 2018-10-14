import React from "react";
import { Link } from "react-router-dom";

const FloatingMenu = () => {
  return (
    <div>
      <div className="fixed-action-btn toolbar hide-on-large-only">
        <a className="btn-floating btn-large blue pulse">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li className="waves-effect waves-light">
            <Link to="/">
              <i className="material-icons">library_books</i>
            </Link>
          </li>
          <li className="waves-effect waves-light">
            <Link to="/customerservice">
              <i className="material-icons">people</i>
            </Link>
          </li>
          <li className="waves-effect waves-light">
            <Link to="/location">
              <i className="material-icons">location_on</i>
            </Link>
          </li>
          <li className="waves-effect waves-light">
            <Link to="/info">
              <i className="material-icons">info</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
