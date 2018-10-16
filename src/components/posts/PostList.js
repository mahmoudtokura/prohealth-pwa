import React, { Component } from "react";
import { ToastContainer, toast, CloseButton } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Snackbar } from "react-mdl";
import PostItem from "./PostItem";
import axios from "axios";
import Preloader from "../common/Preloader";

class PostList extends Component {
  notify = () => {
    toast("The close button change when Chuck Norris display a toast", {
      closeButton: <CloseButton YouCanPassAnyProps="foo" />
    });
  };

  state = {
    posts: [],
    isLoaded: false,
    isOffline: false
  };
  componentDidMount() {
    window.addEventListener("offline", this.showOfflineIndicator);
    axios
      .get(`http://prohealthhmo.com.ng/wp-json/wp/v2/posts`)
      .then(res => {
        this.setState({ posts: res.data, isLoaded: true });
        localStorage.setItem("prohealthpost", JSON.stringify(res.data));
      })
      .catch(err => {
        this.setState({
          posts: JSON.parse(localStorage.getItem("prohealthpost")),
          isLoaded: true
        });
      });
  }

  hideOfflineIndicator = () => {
    this.setState({ isOffline: false });
  };

  showOfflineIndicator = () => {
    this.setState({ isOffline: true });
    return this.notify();
  };

  render() {
    const { posts, isOffline } = this.state;
    return (
      <div className="row container">
        {posts.length ? (
          posts.map(post => {
            return <PostItem key={post.id} post={post} params={this.props} />;
          })
        ) : (
          <Preloader />
        )}

        <Snackbar active={isOffline} action="Undo" style={{ width: "100%" }}>
          You are offline, Prohealth is offline enabled
        </Snackbar>
      </div>
    );
  }
}

export default PostList;
