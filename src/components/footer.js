import React from "react"

// components
import CustomLink from "./customLink"
import SubscriptionForm from "./subscriptionForm"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-col-wrapper">
          <div className="footer-col">
            <CustomLink path="/" styleClass="link">
              <div className="logo-light">
                wood<span>eco</span>
              </div>
            </CustomLink>
            <p>Eco-friendly hardwood flooring company.</p>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="mailto:info@woodeco.co.uk">info@woodeco.co.uk</a>
              </li>
              <li>
                <a href="tel:07006172853">070 0617 2853</a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Stedham,+Midhurst/@50.9050868,-0.8363888,10.21z/data=!4m5!3m4!1s0x48744a9b6ee701e7:0x4ce5a38e332af65!8m2!3d50.993578!4d-0.773917"
                  target="_blank"
                >
                  44 Seaford Road <br />
                  Stedham <br />
                  GU29 8EW
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="http://instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="http://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="http://linkedin.com" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Stay up to date</h4>
            <p>Subscribe to our newsletter.</p>
            <SubscriptionForm />
          </div>
          <div className="footer-copyright">
            © Copyright Woodeco {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
