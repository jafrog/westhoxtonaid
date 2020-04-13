import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import {
  FaClipboard,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import ResourceCards from "../components/resourceCards"
import Section from "../components/section"
import { extractSections, extractResources } from "../components/helpers"

const HelpPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { page: { eq: "Get help" } } }) {
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

  const resources = extractResources(data)
  const sections = extractSections(data)

  return (
    <Layout>
      <SEO title="Volunteer" />

      <Row>
        <Col>
          <h1 className="display-4">I need help</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Row>
            <Col xs={12} md={8}>
              <p className="lead">
                Please put your request for help by clicking on the below link and then entering your details and request.
              </p>
              <p>
                We will then put you in touch with somebody who can help
              </p>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
              <Button
                href="https://forms.gle/AmbJRrdN4QJVcPVGA"
                target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center btn-lg btn-primary px-4 py-3">
                <FaClipboard className="mr-1" />
                Assistance request form
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Get in touch</h2>
        </Col>
      </Row>

      <Contact />

      {sections.map((section, i) => (
        <Section section={section.node} key={i} />
      ))}

      <Row>
        <Col xs={12}>
          <ResourceCards resources={resources} perRow={3}/>
        </Col>
      </Row>
    </Layout>
  )
}

export default HelpPage
