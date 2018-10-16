import React from "react";
import Truncate from "react-truncate";
import html from "react-inner-html";
import { Link, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import post_place_holder from "./post_place_holder.jpg";

const PostItem = ({ post, params }) => {
  const getPost = e => {
    e.preventDefault();

    params.history.push({ pathname: "/post", state: { post } });
  };
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img
            style={{ objectFit: "contain", height: 300 }}
            src={
              post.better_featured_image
                ? post.better_featured_image.source_url
                : post_place_holder
            }
            alt=""
          />
          <span className="card-title blue" style={{ width: "100%" }}>
            {post.title && post.title.rendered}
          </span>
        </div>
        <div className="card-content">
          <Truncate lines={1}>
            {post.excerpt.rendered ? (
              <p {...html(post.excerpt.rendered)} />
            ) : (
              <div>
                <p>
                  An informative post click on "read post" bellow for details.
                  We at ProHealth HMO strive to bring you the best in health
                  managment as well as quality service.
                </p>
              </div>
            )}
          </Truncate>
        </div>
        <div className="card-action ">
          <BrowserRouter>
            <div>
              <Link to="!#" className="blue-text" onClick={getPost}>
                Read Post
              </Link>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostItem);
