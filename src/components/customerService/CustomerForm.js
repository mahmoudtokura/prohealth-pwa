import React, { Component } from "react";
import { EmailShareButton } from "react-share";

class CustomerForm extends Component {
  state = {
    principalEnrolleeName: "",
    phone: "",
    enrolleeIdNumber: "",
    principalEnrolleeEmail: "",
    presentHospitalAndAddress: "",
    newHospitalAndAddress: "",
    resonForChange: ""
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form
            subject
            className="col s12"
            action="mailto:someone@example.com?subject=Change of Hospital Form"
            method="post"
            enctype="text/plain"
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="principalEnrolleName"
                  type="text"
                  className="validate"
                  name="principalEnrolleName"
                />
                <label for="principalEnrolleName">
                  Principal Enrollee Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="enrolleePhone"
                  type="number"
                  className="validate"
                  name="enrolleePhone"
                />
                <label for="enrolleePhone">Enrollee Phone</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="principalEnrolleeEmail"
                  type="email"
                  className="validate"
                  name="principalEnrolleeEmail"
                />
                <label for="principalEnrolleeEmail">
                  Principal Enrollee Email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="currentHospital"
                  className="validate"
                  name="currentHospital"
                />
                <label for="currentHospital">
                  Present Hospital and Address
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="newHospital"
                  className="validate"
                  name="newHospital"
                />
                <label for="newHospital">New Hospital and Address</label>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="input-field col s12">
              <EmailShareButton
                subject="Change of Hospital Form"
                body={this.state}
              >
                <a
                  style={{ width: "100%" }}
                  class="waves-effect waves-light btn blue"
                >
                  Send Message
                </a>
              </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
