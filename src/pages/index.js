import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaClipboard,
  FaHeart
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import Contact from "../components/contact"
import Section from "../components/section"
import ResourceCards from "../components/resourceCards"
import { extractSections, extractResources } from "../components/helpers"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "flyers" } }) {
        nodes {
          publicURL
        }
      }
      allMarkdownRemark(filter: { frontmatter: { page: { eq: "Home" } } }) {
        edges {
          node {
            html
            frontmatter {
              title
              position
              section
              website
              phone
              style
            }
            parent {
              id
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  const sections = extractSections(data)
  const resources = extractResources(data)

  return (
    <Layout>
      <SEO title="Home" />

      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <h1 className="display-3 mb-3 title">
            <span className="heart-emoji" role="img" aria-label="Heart emoji">❤️ </span>
            West Hoxton Mutual Aid
            <span className="heart-emoji" role="img" aria-label="Heart emoji"> ❤️</span>
          </h1>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} className="d-flex justify-content-center">
          <h5>Offering support to everyone in Hoxton West during the COVID-19 outbreak</h5>
        </Col>
      </Row>

      <Row className="mb-5 justify-content-around">
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-center">
          <Button
            href="/volunteer"
            className="d-flex align-items-center mx-3 btn-lg btn-secondary px-4 py-3 btn-light">
            <FaClipboard className="mr-2"/>
            Offer support
          </Button>
        </Col>

        <Col xs={12} md={6} className="mb-3 d-flex justify-content-center">
          <Button
            href="/help"
            className="d-flex align-items-center mx-3 btn-lg btn-secondary px-4 py-3 btn-light">
            <FaHeart className="mr-2"/>
            Get support
          </Button>
        </Col>
      </Row>

      {sections.map((section, i) => (
        <Section section={section.node} key={i} />
      ))}

      <Row className="mb-5 mt-n5">
        <Col>
          To download our leaflets click <a target="_blank" rel="noopener noreferrer" href={data.allFile.nodes[0]["publicURL"]}>here</a>.
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

      <Row>
        <Col xs={12}>
          <ResourceCards resources={resources} perRow={3}/>
        </Col>
      </Row>

    </Layout>
    )
  }

  export default IndexPage
