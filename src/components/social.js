import React from "react"
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap"
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Social = () => (
  <Row className="mb-5 d-flex justify-content-center">
    <Col xs={12} sm={3} className="px-3 d-flex justify-content-center mb-3">
      <Button
        href="https://www.facebook.com/groups/791760537983496/"
        variant="secondary"
        className="d-flex align-items-center"
        target="_blank" rel="noopener noreferrer">
        <FaFacebook className="mr-1"/>
        Facebook
      </Button>
    </Col>
    <Col xs={12} sm={3} className="px-3 d-flex justify-content-center mb-3">  
      <Button
        href="https://chat.whatsapp.com/ExfTKM1Cpdz9V9o9nWRDnX"
        variant="secondary"
        className="d-flex align-items-center"
        target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="mr-1"/>
        Whatsapp
      </Button>
    </Col>
    <Col xs={12} sm={3} className="px-3 d-flex justify-content-center mb-3">
      <Button
        href="https://twitter.com/HoxtonWestAid"
        variant="secondary"
        className="d-flex align-items-center"
        target="_blank" rel="noopener noreferrer">
        <FaTwitter className="mr-1"/>
        Twitter
      </Button>
    </Col>
    <Col xs={12} sm={3} className="px-3 d-flex justify-content-center mb-3">
      <Button
        href="https://instagram.com/hoxtonwestmutualaid"
        variant="secondary"
        className="d-flex align-items-center"
        target="_blank" rel="noopener noreferrer">
        <FaInstagram className="mr-1"/>
        Instagram
      </Button>
    </Col>
  </Row>
)

export default Social