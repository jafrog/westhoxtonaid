import React from "react"
import { 
  Row,
  Col,
  Button
} from "react-bootstrap"
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us" />
    
    <Row>
      <Col>
        <h1 className="display-4">Get in touch</h1>
      </Col>
    </Row>
    
    <Contact />
  </Layout>
)

export default ContactPage