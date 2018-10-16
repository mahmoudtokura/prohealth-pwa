import React, { Component } from "react";
import html from "react-inner-html";
import ShareFAB from "../common/ShareFAB";
import "./post.css";
import post_place_holder from "./post_place_holder.jpg";

class Post extends Component {
  render() {
    const { post } = this.props.location.state;
    console.log(post);
    return (
      <div className="row container">
        <div className="col s12 m12">
          <div className="card z-depth-0">
            <div className="card-image">
              <img
                src={
                  post.better_featured_image
                    ? post.better_featured_image.source_url
                    : post_place_holder
                }
                alt=""
                style={{}}
              />
              <hr />
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
