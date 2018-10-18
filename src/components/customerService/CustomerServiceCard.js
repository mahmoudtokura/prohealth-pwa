import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomerServiceCard extends Component {
  state = {
    isCardOpen: false
  };

  render() {
    const { params, navPath, title, image, icon, content } = this.props;

    const handleClick = e => {
      e.preventDefault();
      params.history.push(navPath);
      console.log(navPath);
    };

    const handleCardToggle = () => {
      this.setState({ isCardOpen: !this.state.isCardOpen });
    };

    return (
      <div>
        <ul className="collection" onClick={handleCardToggle}>
          <li className="collection-item avatar">
            <i className="material-icons circle blue">{icon}</i>
            <span className="title">{title}</span>
            <p>
              First Line <br /> Second Line
            </p>
            <a href="#!" className="secondary-content">
              {this.state.isCardOpen ? (
                <i className="material-icons blue-text">arrow_drop_up</i>
              ) : (
                <i className="material-icons blue-text">arrow_drop_down</i>
              )}
            </a>
          </li>
          {this.state.isCardOpen && (
            <div className="row">
              <div className="col s12 m12 l8 offset-l2">
                <div className="card">
                  <div className="card-image">
                    <img src={image} />
                    <span className="card-title">{title}</span>
                  </div>
                  <div class="card-content">
                    <p>{content}</p>
                  </div>
                  <div className="card-action" onClick={handleClick}>
                    <Link to="!#">More</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default CustomerServiceCard;
