import React, { Component } from "react";
import "./App.css";
import PostList from "./components/postlist/PostList";
import Navbar from "./components/navbar/Navbar";
import FloatingMenu from "./components/floatingMenu/FloatingMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomerService from "./components/customerService/CustomerService";
import Location from "./components/location/Location";
import Info from "./components/info/Info";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <FloatingMenu />
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/customerservice" component={CustomerService} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/info" component={Info} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
