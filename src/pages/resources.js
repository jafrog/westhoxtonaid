import React from "react"
import {
  Row,
  Col
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceCards from "../components/resourceCards"
import Section from "../components/section"
import { extractSections, extractResources } from "../components/helpers"

const ResourcesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { page: { eq: "More support" } } }) {
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
    .reduce((acc, resource) => {
      const section = resource.section || "";
      (acc[section] = acc[section] || []).push(resource)
      return acc
    }, {})

  return (
    <Layout>
      <SEO title="Resources" />

      <Row>
        <Col xs={12}>
          <h1 className="display-4">Support services</h1>
        </Col>
      </Row>

      {sections.map((section, i) => (
        <Section section={section.node} key={i} />
      ))}

      {Object.entries(resources).map((entry, i) => {
        const section = entry[0]
        const resources = entry[1]
        return (
          <ResourceCards
            section={section}
            resources={resources}
            perRow={3}
            key={i}
            />
        )
      })}

    </Layout>
  )
}

export default ResourcesPage
