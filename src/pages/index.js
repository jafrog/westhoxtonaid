import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Row>
      <Col xs={12}>
        <h1 className="display-3 mb-3">West Hoxton Mutual Aid</h1>
      </Col>
    </Row>
    
    <Row className="mb-3">
      <Col xs={12}>
        <h5>Offering support to everyone in Hoxton West during the COVID-19 outbreak</h5>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <h2>Who are we?</h2>
      </Col>
    </Row>
    
    <Row className="mb-5">
      <Col>
      <p>
        Are you self-isolating due to coronavirus or know someone who is? Do you need someone to run errands, 
        walk your dog or to talk to if you are feeling lonely? Or do you want to volunteer to help your local community 
        through the challenges of coronavirus?
      </p>
      
      <p>
        We can help!
      </p>

      <p>
        We are Hoxton West Mutual Aid, a group of local residents operating in the Hoxton West ward of Hackney, 
        and we are here to support you at this time. We offer our help completely free. 
        You can read more about us and our set-up <Link to="/about">here</Link>. Please note that all our volunteers are asked to follow strict 
        hygiene and safeguarding protocols when volunteering, which you can find out more about <Link to="/health">here</Link>.
      </p>

      <p>
        To request assistance from us please click <a target="_blank" href="https://forms.gle/AmbJRrdN4QJVcPVGA">here</a>.
      </p>
      
      <p>
        To volunteer to help your fellow Hoxton West residents please click <a target="_blank" href="https://tinyurl.com/th2h5ox">here</a>.
      </p>
      </Col>
    </Row>
    
    <Row>
      <Col xs={12}>
        <h2>Where do we operate?</h2>
      </Col>
    </Row>
    <Map />
    
  </Layout>
)

export default IndexPage
