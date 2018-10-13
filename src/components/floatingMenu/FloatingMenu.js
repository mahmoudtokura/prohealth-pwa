import React from "react";

const FloatingMenu = () => {
  return (
    <div>
      <div class="fixed-action-btn toolbar hide-on-large-only">
        <a class="btn-floating btn-large blue">
          <i class="large material-icons">menu</i>
        </a>
        <ul>
          <li class="waves-effect waves-light">
            <a
              href="#!"
              onClick={() => {
                alert("You clicked posts");
              }}
            >
              <i class="material-icons">local_library</i>
            </a>
          </li>
          <li class="waves-effect waves-light">
            <a href="#!">
              <i class="material-icons">create</i>
            </a>
          </li>
          <li class="waves-effect waves-light">
            <a href="#!">
              <i class="material-icons">contacts</i>
            </a>
          </li>
          <li class="waves-effect waves-light">
            <a href="#!">
              <i class="material-icons">info</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
