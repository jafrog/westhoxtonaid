import React from "react"
import { 
  Row,
  Col,
  Button 
} from "react-bootstrap"
import {
  FaClipboard,
  FaEnvelope,
  FaPhone
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelpPage = () => {
  return (
    <Layout>
      <SEO title="Volunteer" />
      <Row>
        <Col>
          
          <Row>
            <Col>
              <h1 className="display-4">I need help</h1>
            </Col>
          </Row>
        
          <Row className="mb-5">
            <Col>
              <Row className="mb-5">
                <Col xs={12} sm={8}>
                  <p className="lead">
                    Please put your request for help by clicking on the below link and then entering your details and request.
                  </p>
                  <p>
                    We will then put you in touch with somebody who can help
                  </p>
                </Col>
                <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center mb-3">
                  <p>
                    <Button
                      href="https://forms.gle/AmbJRrdN4QJVcPVGA"
                      className="d-flex align-items-center btn-lg btn-primary w-100">
                      <FaClipboard className="mr-1" />
                      Assistance request form
                    </Button>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
      
          <Row>
            <Col xs={12}>
              <h2>Get in touch</h2>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} className="mb-3 d-flex align-items-center justify-content-center">
              <Button
                href="tel:07538 829 692"
                variant="secondary"
                className="d-flex align-items-center mx-3"
                >
                  <FaPhone className="mr-1"/>
                  Call or text
              </Button>
              <Button
                href="mailto:hoxtonwestmutualaid@gmail.com"
                variant="secondary"
                className="d-flex align-items-center"
                >
                  <FaEnvelope className="mr-1"/>
                  Email
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default HelpPage