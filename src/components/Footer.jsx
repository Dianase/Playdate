import React from "react";
import * as AiIcons from "react-icons/ai";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h5>Copyright</h5>
        <p>© 2021 Diana Tineo</p>
      </div>
      <div>
        <h5>Contact Us</h5>
        <p></p>
        <p></p>
        <p><AiIcons.AiFillLinkedin/></p>
        <p>
          <AiIcons.AiFillGithub />
        </p>
      </div>
      <div>
        <h5>Technologies</h5>
        <p></p>
      </div>
    </div>
  );
}
