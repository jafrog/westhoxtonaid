import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Row>
      <h1 className="display-3">West Hoxton Mutual Aid</h1>
    </Row>

    <Row className="mb-5">
      <Col>
      <p className="lead">Are you self-isolating or know someone who is? You are not alone!</p>
      
      <p className="mb-3">
        Hoston West Mutual Aid group will try to help you.
      </p>

      <p>
        Are you unable or afraid to leave your home due to coronavirus? Do you need someone to run errands, do shopping, walk your dog, or just someone to talk to?
      </p>

      <p>
        We are a group of local residents getting together to  support each other at this time. We are offerring this help completely free.
      </p>
      </Col>
    </Row>
    
    <Row>
      <Col xs={12}>
        <h2>Where do we operate?</h2>
      </Col>
    </Row>
    <Map />
    
    <Row className="mt-5">
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

    <div className="row my-5">
      <div className="col-12">
        <p>
          We also need more volunteers! Get in touch to join the effort or sign up at <a href="tinyurl.com/th2h5ox">here</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
