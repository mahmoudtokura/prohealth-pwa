import React, { Component } from "react";
import html from "react-inner-html";
import ShareFAB from "../common/ShareFAB";
import "./post.css";

class Post extends Component {
  render() {
    const { post } = this.props.location.state;
    console.log(post);
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img
                src={
                  post.better_featured_image
                    ? post.better_featured_image.source_url
                    : "https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1050&q=80"
                }
                alt=""
              />
              <ShareFAB post={post} />
            </div>
            <div className="card-content">
              <span className="card-title">
                {post.title.rendered ? (
                  post.title.rendered
                ) : (
                  <h1>Here to serve you better</h1>
                )}
              </span>
              <div>
                {post.content.rendered ? (
                  <p {...html(post.content.rendered)} className="ext" />
                ) : (
                  <div>
                    <p>
                      An informative post click on "read post" bellow for
                      details. We at ProHealth HMO strive to bring you the best
                      in health managment as well as quality service.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
