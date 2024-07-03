import React from "react";
import { icons } from "../../assets/assets";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Email, Send } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <img src={icons.logosenb} alt="" />
          <div className="company-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
          </div>
          <hr />
          <div className="social-icons-company">
            <img src={icons.linkedin} alt="" className="icon" />
            <img src={icons.github_white} alt="" className="icon" />
            <img src={icons.telegram} alt="" className="icon" />
            <img src={icons.whatsapp} alt="" className="icon" />
          </div>
        </div>

        <div className="box">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>

          <div className="contact-me">
            <div className="contact-text">
              <img className="icon" src={icons.location} alt="" />
              <a href="">El Tejar - Santa Rosa Road 14-74</a>
            </div>
            <div className="contact-text">
              <img className="icon" src={icons.phone} alt="" />
              <a href="">+593-994-532-438</a>
            </div>
            <div className="contact-text">
              <img className="icon" src={icons.email} alt="" />
              <a href="">mariosalazar.ms.10@gmail.com</a>
            </div>
            <div className="contact-text">
              <img className="icon" src={icons.location} alt="" />
              <a href="">El Tejar - Santa Rosa Road 14-74</a>
            </div>
          </div>
        </div>

        <div className="box">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/">
              Services
            </Link>
            <Link className="link" to="/">
              About me
            </Link>
            <Link className="link" to="/">
              Education
            </Link>
            <Link className="link" to="/">
              Contacts
            </Link>
          </ul>
        </div>

        <div className="box">
          <h3>
            Contact Me
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia minus
            impedit error perspiciatis excepturi voluptatibus.
          </p>
          <form>
            <Email />
            <input type="email" placeholder="Enter your email id" required />

            <button>
              <Send />
            </button>
          </form>
          <div className="social-icons-company">
            <img src={icons.linkedin} alt="" className="icon" />
            <img src={icons.phone} alt="" className="icon" />
            <img src={icons.telegram} alt="" className="icon" />
            <img src={icons.whatsapp} alt="" className="icon" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        © 2024 All Rights Reserved, Designed by Mario Salazar - SALAZAR®
      </p>
    </div>
  );
};
export default Footer;
