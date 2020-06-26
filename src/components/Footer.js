import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMapMarkedAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="footer">
      <div className="summary">
        <div className="footer-center">
          <div className="footer-one">
            <div className="footer-item">
              <h4>products</h4>
              <ul>
                <li>
                  <Link to="">Price drop</Link>
                </li>
                <li>
                  <Link to="">New products</Link>
                </li>
                <li>
                  <Link to="">Best sales</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>our company</h4>
              <ul>
                <li>
                  <Link to="">Delivery</Link>
                </li>
                <li>
                  <Link to="">Legal notice</Link>
                </li>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Secure payment</Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>customer service</h4>
              <ul>
                <li>
                  <Link to="">New products</Link>
                </li>
                <li>
                  <Link to="">Best sales</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
                <li>
                  <Link to="">Sitemap</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Contact details</h4>
              <ul>
                <li>
                  <Link to="">
                    <FaEnvelope /> <span> peterihimire@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaMapMarkerAlt />
                    <span> No. 6 Oyediran, Okeira, Ikeja.</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaMapMarkedAlt /> <span> Lagos, Nigeria.</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-follow">
              <h4>Follow us</h4>
              <ul className="follow-links-footer">
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer1">
                    <a
                      href="https://facebook.com/ihimirepeter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="follow-icon-footer FaFacebookF" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer2">
                    <a
                      href="https://twitter.com/ptechanalysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="follow-icon-footer FaTwitter" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer3">
                    <a
                      href="https://instagram.com/peterihimire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="follow-icon-footer FaInstagram" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer4">
                    <a
                      href="https://www.linkedin.com/in/peter-ihimire-20b007162"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="follow-icon-footer FaLinkedinIn" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer5">
                    <a
                      href="https://github.com/peterihimire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="follow-icon-footer FaGithub" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="contact-center">
          <div className="last-footer">
            <p>copyright &copy; 2020 benkih. all rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
