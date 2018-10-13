import React from "react";
import Truncate from "react-truncate";

const PostItem = ({ post }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-0.3.5&s=f11286ba014672fc0026e5c2a292102c&auto=format&fit=crop&w=1050&q=80" />
          <span className="card-title">{post.title}</span>
        </div>
        <div className="card-content">
          <Truncate lines={1}>{post.body}</Truncate>
        </div>
        <div className="card-action ">
          <a href="#" className="blue-text">
            Read Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
