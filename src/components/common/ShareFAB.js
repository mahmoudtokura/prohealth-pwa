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
  const { title, link } = props.post;
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
            <FacebookShareButton
              quote={
                title.rendered
                  ? title.rendered
                  : "An awesome post from Prohealth HMO"
              }
              url={link}
            >
              <FacebookIcon size={"100%"} round={true} />
            </FacebookShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <TwitterShareButton
              title={
                title.rendered
                  ? title.rendered
                  : "An awesome post from Prohealth HMO"
              }
              url={link}
            >
              <TwitterIcon size={"100%"} round={true} />
            </TwitterShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <WhatsappShareButton
              title={
                title.rendered
                  ? title.rendered
                  : "An awesome post from Prohealth HMO"
              }
              url={link}
            >
              <WhatsappIcon size={"100%"} round={true} />
            </WhatsappShareButton>
          </a>
        </li>
        <li>
          <a className="btn-floating">
            <EmailShareButton
              subject={
                title.rendered
                  ? title.rendered
                  : "An awesome post from Prohealth HMO"
              }
              url={link}
              body={link}
            >
              <EmailIcon size={"100%"} round={true} />
            </EmailShareButton>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareFAB;
