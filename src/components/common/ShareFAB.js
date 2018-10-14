import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  EmailShareButton
} from "react-share";

const ShareFAB = props => {
  return (
    <div
      className="fixed-action-btn halfway-fab horizontal click-to-toggle"
      style={{ marginBottom: "80%" }}
    >
      <a className="btn-floating btn-large red">
        <i className="material-icons">share</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating">
            <FacebookShareButton quote={props.title} url={props.link}>
              <FacebookIcon size={"100%"} round={true} />
            </FacebookShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <TwitterShareButton title={props.title} via={props.link}>
              <TwitterIcon size={"100%"} round={true} />
            </TwitterShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <WhatsappShareButton title={props.title} url={props.link}>
              <WhatsappIcon size={"100%"} round={true} />
            </WhatsappShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <EmailShareButton subject={props.title} body={props.link}>
              <EmailIcon size={"100%"} round={true} />
            </EmailShareButton>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareFAB;
