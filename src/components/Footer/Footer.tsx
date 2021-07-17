import React from "react";
import './Footer.css'

export const Footer = () => {
    return(
        <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
          <a href="https://www.linkedin.com/in/aman11srivastava/" target="__blank">
              Aman Srivastava
        </a>
      </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="/#" target="__blank">
                    <i className="fab fa-instagram-square fa-2x"/>
                </a>
                <a href="https://www.linkedin.com/in/aman11srivastava/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"/>
                </a>
                <a href="https://www.facebook.com/aman.srivastava.1481/" target="__blank">
                    <i className="fab fa-facebook fa-2x"/>
                </a>

            </div>
        </div>
    )
}

export default Footer;
