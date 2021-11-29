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
        <h5>About</h5>
        <p>Our Mission</p>
      </div>
      <div>
        <h5>Contact Us</h5>
        <p>
          <AiIcons.AiOutlineMail /> Email{" "}
        </p>
        <p>
          <AiIcons.AiFillGithub /> Github{" "}
        </p>

        <p>
          <AiIcons.AiFillLinkedin /> LinkedIn{" "}
        </p>
      </div>
    </div>
  );
}
