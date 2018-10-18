import React from "react";
import change_hospital from "./assests/change_hospital.jpg";
import CustomerForm from "./CustomerForm";

const ChangeHospital = () => {
  return (
    <div className="container">
      <h3>Change your hospital</h3>
      <div className="row">
        <div className="col s12 m12 l8 offset-l2">
          <div className="card">
            <div className="card-image">
              <img src={change_hospital} />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <CustomerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeHospital;
