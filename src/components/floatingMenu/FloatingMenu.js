import React from "react";

const FloatingMenu = () => {
  return (
    <div>
      <div className="fixed-action-btn toolbar hide-on-large-only">
        <a className="btn-floating btn-large blue">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li className="waves-effect waves-light">
            <a
              href="#!"
              onClick={() => {
                alert("You clicked posts");
              }}
            >
              <i className="material-icons">library_books</i>
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="#!">
              <i className="material-icons">people</i>
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="#!">
              <i className="material-icons">location_on</i>
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="#!">
              <i className="material-icons">info</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
