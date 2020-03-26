import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  FaClipboard,
  FaHeart
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import Contact from "../components/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "flyers" } }) {
        nodes {
          publicURL
        }
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title="Home" />
      
      <Row>
        <Col xs={12}>
          <h1 className="display-3 mb-3 title">
            <span className="heart-emoji" role="img" aria-label="Heart emoji">❤️ </span>
            West Hoxton Mutual Aid
            <span className="heart-emoji" role="img" aria-label="Heart emoji"> ❤️</span>
          </h1>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col xs={12}>
          <h5>Offering support to everyone in Hoxton West during the COVID-19 outbreak</h5>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col xs={12} className="mb-3 d-flex align-items-center justify-content-around">
          <Button
            href="/volunteer"
            className="d-flex align-items-center mx-3 btn-lg btn-secondary px-4 py-3 btn-dark"
            >
              <FaClipboard className="mr-2"/>
              Offer support
            </Button>
            
            <Button
              href="/help"
              className="d-flex align-items-center mx-3 btn-lg btn-secondary px-4 py-3 btn-light"
              >
                <FaHeart className="mr-2"/>
                Get support
              </Button>
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
                To request assistance from us please click <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/AmbJRrdN4QJVcPVGA">here</a>.
              </p>
              
              <p>
                To volunteer to help your fellow Hoxton West residents please click <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/th2h5ox">here</a>.
              </p>
              
              <p>
                To download our leaflets click <a target="_blank" rel="noopener noreferrer" href={data.allFile.nodes[0]["publicURL"]}>here</a>.
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
              <h2>Contact us</h2>
            </Col>
          </Row>
          
        <Contact />
          
        </Layout>
  )
}

export default IndexPage
