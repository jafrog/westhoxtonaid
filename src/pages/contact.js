import React from "react"
import {
  Row,
  Col,
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import ResourceCards from "../components/resourceCards"
import Section from "../components/section"
import { extractSections, extractResources } from "../components/helpers"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { page: { eq: "Contact us" } } }) {
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
      <SEO title="Contact us" />

      <Row>
        <Col>
          <h1 className="display-4">Get in touch</h1>
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

export default ContactPage
