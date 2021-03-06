import React from "react";
import "./Footer.css";
// import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";

function Footer({ id }) {
  return (
    <footer className="footer-container" id={id}>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="footer__text">About</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2 className="footer__text">Be Part</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="footer__text">Resources</h2>
            <Link to="/">Testimonials</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2 className="footer__text">Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Pot_Belly
              <MdOutlineFastfood />
            </Link>
          </div>
          <small className="website-rights">PotBelly © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
