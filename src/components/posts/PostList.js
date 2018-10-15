import React, { Component } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import Preloader from "../common/Preloader";

class PostList extends Component {
  state = {
    posts: [],
    isLoaded: false
  };
  componentDidMount() {
    axios.get(`http://prohealthhmo.com.ng/wp-json/wp/v2/posts`).then(res => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="row container">
        {posts.length ? (
          posts.map(post => {
            return <PostItem key={post.id} post={post} params={this.props} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
    );
  }
}

export default PostList;
