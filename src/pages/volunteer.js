import React from "react"
import {
  Row,
  Col,
  Button,
  Alert
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaClipboard,
  FaWhatsapp,
  FaExclamationTriangle,
} from "react-icons/fa"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceCards from "../components/resourceCards"
import Social from "../components/social"
import { extractResources } from "../components/helpers"

const areaWhatsapps = [
  {
    href: "https://chat.whatsapp.com/FM0nS1UUD5M4Ep3anLDIkC",
    area: "Area A"
  },
  {
    href: "https://chat.whatsapp.com/LdD0leTB3twI68hvAoz3it",
    area: "Area B",
  },
  {
    href: "https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2",
    area: "Area C",
  },
  {
    href: "https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2",
    area: "Area D",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area E",
  },
  {
    href: "https://chat.whatsapp.com/GeYyjsKh4YkFPiRmjRMAC5",
    area: "Area F",
  },
  {
    href: "https://chat.whatsapp.com/C8W5eFwSlYLLiIQXWyeqeN",
    area: "Area G",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area H",
  },
  {
    href: "https://chat.whatsapp.com/GOESEE8RUSk1Swwjep834F",
    area: "Area I",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area J",
  },
]

const VolunteerPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mapImage: file(relativePath: { eq: "hoxtonwestmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(filter: { name: { eq: "flyers" } }) {
          nodes {
            publicURL
          }
      }
      allMarkdownRemark(filter: { frontmatter: { page: { eq: "Volunteer" } } }) {
        edges {
          node {
            html
            frontmatter {
              title
              position
              section
              website
              phone
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

  return (
    <Layout>
      <SEO title="Volunteer" />

      <Row>
        <Col>
          <h1 className="display-4">I want to volunteer</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12} md={8}>
          <p className="lead">
            All volunteers that would like to help out please fill in your details
          </p>
          <p>
            By registering your details as a volunteer will help us to match any requests that come through and identify areas that may need extra support.
          </p>
          <p>
            To download our leaflets click <a target="_blank" rel="noopener noreferrer" href={data.allFile.nodes[0]["publicURL"]}>here</a>.
          </p>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
          <Button
            href="https://forms.gle/yMZGT5m2irvLpnxe7"
            target="_blank" rel="noopener noreferrer"
            className="d-flex align-items-center btn-lg btn-primary px-4 py-3">
            <FaClipboard className="mr-1" />
            Register to volunteer
          </Button>
        </Col>
      </Row>

        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="mb-3">Completing assistance requests</h2>

            <p>
              In line with the government guidelines of minimising your time outdoors, please only run assistance requests in conjunction with your own errands or exercise time.
            </p>
            <Alert variant="warning" className="d-flex align-items-center">
              <FaExclamationTriangle style={{
                width: "2rem",
                fontSize: "1.25rem",
              }} className="mr-3" />
              For errands please make sure you are following the
              <Link to="/health" className="ml-1"> safety advice </Link>
            </Alert>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h2>Keep up-to-date via social media</h2>
          </Col>
        </Row>

        <Social />

        <Row className="mb-5">
          <Col xs={12} lg={6} className="mb-3">
            <div style={{width: "400px"}}>
              <Img fluid={data.mapImage.childImageSharp.fluid} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <p>Join your street area WhatsApp group to get notified on assistance requests in your area that you could help out with</p>
            <Row>
              {areaWhatsapps.eachSlice(5).map((slice, index) => (
                <Col xs={12} sm={6} key={index}>
                  {slice.map((link, index) => (
                    <Button
                      variant="outline-secondary"
                      href={link.href}
                      className="d-flex align-items-center justify-content-center mb-3"
                      target="_blank" rel="noopener noreferrer"
                      key={index}>
                      <FaWhatsapp className="mr-1"/>
                      {link.area}
                    </Button>
                  ))}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h2>Other ways to help</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <ResourceCards resources={resources} perRow={3}/>
          </Col>
        </Row>
    </Layout>
  )
}

export default VolunteerPage
