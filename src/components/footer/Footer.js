import React from "react";
import Fade from "react-reveal/Fade";
import "./Footer.scss";
import "./../../styles/share.scss";
export default function Footer() {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          The venue
          <div className="footer_copyright">
            The venue 2018.All rights reserved.
          </div>
        </div>
      </Fade>
    </footer>
  );
}
