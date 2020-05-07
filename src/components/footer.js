import React from "react"
import {
  Row,
  Col
} from "react-bootstrap"
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaGithub
} from "react-icons/fa"

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col xs={10} className="offset-1">
        <Row className="footer-content mt-5 mb-1 py-2">
          <Col xs={6}>
            <h4 className="light mb-3">Contact us</h4>

            <h6 className="bold light mb-0">Phone or text</h6>
            <h6 className="light mb-3">0753 882 9692</h6>

            <h6 className="bold light mb-0">Email</h6>
            <a
              href="mailto:hoxtonwestmutualaid@gmail.com"
              className="contact-link"
              target="_blank" rel="noopener noreferrer"
            >
              <h6 className="light mb-1">
                hoxtonwestmutualaid@gmail.com
              </h6>
            </a>
          </Col>

          <Col xs={6}>
            <h4 className="light mb-3">Social media</h4>
            <div className="social">
              <a
                href="https://twitter.com/HoxtonWestAid"
                target="_blank" rel="noopener noreferrer"
              >
                <FaTwitter/>
              </a>

              <a
                href="https://www.facebook.com/groups/791760537983496/"
                target="_blank" rel="noopener noreferrer"
              >
                <FaFacebookF/>
              </a>

              <a
                href="https://instagram.com/hoxtonwestmutualaid"
                target="_blank" rel="noopener noreferrer"
              >
                <FaInstagram/>
              </a>

              <a
                href="https://chat.whatsapp.com/ExfTKM1Cpdz9V9o9nWRDnX"
                target="_blank" rel="noopener noreferrer"
              >
                <FaWhatsapp/>
              </a>
            </div>

            <a
              href="https://github.com/jafrog/westhoxtonaid"
              target="_blank" rel="noopener noreferrer"
              className="contact-link"
            >
              <h6 className="light mt-3 d-flex">
                <FaGithub className="mr-1" /> Clone me on Github
              </h6>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <small className="light">
              © 2020 West Hoxton Mutual Aid.
            </small>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
)

export default Footer
