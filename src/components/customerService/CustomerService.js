import React, { Component } from "react";
import CustomerServiceCard from "./CustomerServiceCard";
import health_plan from "./assests/health_plan.jpg";
import change_hospital from "./assests/change_hospital.jpg";

class CustomerService extends Component {
  render() {
    return (
      <div className="container">
        <h3>Customer service</h3>
        <div className="row">
          <CustomerServiceCard
            image={health_plan}
            title="Health Plans"
            params={this.props}
            navPath="/customerservice/healthplans"
            icon="library_books"
            content="At prohealth, we have flexible plans to help you get the right health care service that you need."
          />
          <CustomerServiceCard
            image={change_hospital}
            title="Change Hospital"
            params={this.props}
            navPath="/customerservice/changehospital"
            icon="local_hospital"
            content="Changed your locataion or simple not certisfied with your current Hospital? We can help with that."
          />
        </div>
      </div>
    );
  }
}

export default CustomerService;
