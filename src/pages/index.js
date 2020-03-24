import React from "react"
import {
  Row,
  Col
} from "react-bootstrap"

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
      <h2>Where do we operate?</h2>
    </Row>
    <Map />

    <div className="row my-5">
      <div className="col-12">
        <div className="card-deck justify-content-between">
          <div className="card col-12 col-sm-5 text-center p-3">
            <div className="card-body">
              <p className="card-title">Call or text</p>
              <h5><a href="tel:07538 829 692">07538 829 692</a></h5>
            </div>
          </div>

          <div className="card col-12 col-sm-5 text-center p-3">
            <div className="card-body">
              <p className="card-title">Email</p>
              <h5>
                <a href="mailto:hoxtonwestmutualaid@gmail.com">
                  hoxtonwestmutualaid@gmail.com
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

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
