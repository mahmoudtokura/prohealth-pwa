import React, { Component } from "react";
import "./App.css";
import PostList from "./components/postlist/PostList";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FloatingMenu from "./components/floatingMenu/FloatingMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FloatingMenu />
        <PostList />
      </div>
    );
  }
}

export default App;
