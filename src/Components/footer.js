import React from "react";
import ghimg from "../images/GitHub-Mark-32px.png";
const Footer = () => {
  return (
    <footer className="container row no-gutters">
      <div className="col-6">
        <p>Can Zoroğlu, 2019</p>
      </div>
      <div className="col-6 text-left">
        <a href="https://github.com/canzoroglu"><img src={ghimg} alt="GitHub Repo"/></a>
      </div>
    </footer>
  );
}

export default Footer;
