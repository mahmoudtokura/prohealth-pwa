import React from "react";
import health_plan from "./assests/health_plan.jpg";

const HealthPlans = () => {
  return (
    <div className="container">
      <h3>Prohealth Health plans</h3>
      <div className="row">
        <div className="col s12 m12 l8 offset-l2">
          <div className="card">
            <div className="card-image">
              <img src={health_plan} />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPlans;
