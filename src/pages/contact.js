import React from "react"
import { 
  Row,
  Col,
  Button
} from "react-bootstrap"
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us" />
    
    <Row>
      <Col>
        <h1 className="display-4">Get in touch</h1>
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
      </Layout>
)

export default ContactPage