import React, { Component } from "react";
import PostItem from "../postitem/PostItem";
import axios from "axios";

class PostList extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    console.log(this.state.posts);
    const { posts } = this.state;
    return (
      <div className="row">
        {posts.map(post => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    );
  }
}

export default PostList;
