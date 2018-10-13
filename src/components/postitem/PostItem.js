import React from "react";
import Truncate from "react-truncate";
import html from "react-inner-html";

const PostItem = ({ post }) => {
  const createMarkup = () => {
    return { __html: post.content.rendered };
  };

  const setContent = () => {
    return <p dangerouslySetInnerHTML={createMarkup()} />;
  };

  return (
    <div className="col s12 m6 l4">
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
          <span className="card-title">
            {post.title && post.title.rendered}
          </span>
        </div>
        <div className="card-content">
          <Truncate lines={1}>
            {post.excerpt.rendered ? (
              <p {...html(post.excerpt.rendered)} />
            ) : (
              <p>An informative post click on "read post" bellow for details</p>
            )}
          </Truncate>
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
