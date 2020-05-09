import React from "react"
import {
  Row,
  Col,
  Button
} from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  FaFileDownload
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import Contact from "../components/contact"
import shoppingMan from "../assets/shopping_man.png"
import house from "../assets/house.png"
import worldWoman from "../assets/world_woman.png"

const IndexPage = ({ path }) => {
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
    <Layout location={path}>
      <SEO title="Home" />

      <Row className="mb-4">
        <Col xs={12} className="d-flex justify-content-center">
          <h1 className="my-5 purple">
            West Hoxton Mutual Aid
          </h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={8} className="d-flex justify-content-center offset-2">
          <h2>Offering support to everyone in Hoxton West during the COVID-19 outbreak</h2>
        </Col>
      </Row>

      <Row className="mb-5 pt-4">
        <Col xs={12} md={6} className="mb-3 pr-md-3 d-flex justify-content-end">
          <Button
            href="/help"
            variant="primary light"
            size="lg"
            className="mr-md-3"
          >
            Get support
          </Button>
        </Col>

        <Col xs={12} md={6} className="mb-3 pl-md-3 d-flex justify-content-start">
          <Button
            href="/volunteer"
            variant="secondary light"
            size="lg"
            className="ml-md-3"
          >
            Offer support
          </Button>
        </Col>
      </Row>

      <section className="index-section">
        <Row>
          <Col xs={10} className="offset-1">
            <h2>
              Who we are?
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="d-flex justify-content-end">
            <div className="whoWeAre-item">
              <img src={house} alt="A small house"/>
              <h3 className="alt">
                Self-isolating?
              </h3>
              <p>
                Are you self-isolating due to coronavirus or know someone who is?
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="whoWeAre-item">
              <img src={shoppingMan} alt="Man with a shopping cart"/>
              <h3 className="alt">Need help?</h3>
              <p>
                Do you need someone to run errands, walk your dog or to talk to if you are feeling lonely?
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-start">
            <div className="whoWeAre-item">
              <img src={worldWoman} alt="A woman with a globe"/>
              <h3 className="alt">Want to volunteer?</h3>
              <p>
                Or do you want to volunteer to help your local community through the challenges of coronavirus?
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="index-section">
        <Row>
          <Col xs={10} className="offset-1">
            <h2>
              We can help!
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="d-flex justify-content-end offset-md-1">
            <div className="weCanHelp-section">
              <p>
                We are Hoxton West Mutual Aid, a group of local residents operating in the Hoxton West ward of Hackney, and we are here to support you at this time. We offer our help completely free.
              </p>
              <Link to="/about" className="d-flex mt-4">
                Learn more about us
              </Link>
            </div>
          </Col>

          <Col md={5} className="d-flex justify-content-start">
            <div className="weCanHelp-section">
              <p>
                Please note that all our volunteers are asked to follow strict hygiene and safeguarding protocols when volunteering
              </p>
              <Link to="/health" className="d-flex mt-4">
                Learn more about health & safety
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col xs={10} className="offset-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.allFile.nodes[0]["publicURL"]}
              className="downloadLeafletsLink d-flex"
            >
              <FaFileDownload className="mr-1"/>
              <h6 className="pink m-0">
                Download our leaflets.
              </h6>
            </a>
          </Col>
        </Row>
      </section>

      <section className="index-section index-sectionMap py-5">
        <Row>
          <Col xs={10} className="offset-1">
            <h2>
              Where do we operate?
            </h2>
          </Col>
        </Row>
        <Col xs={12} md={8} className="offset-md-2">
          <Map />
        </Col>
      </section>

      <Row className="mt-5">
        <Col xs={10} className="offset-1">
          <h2>Contact us</h2>
        </Col>
      </Row>

      <Contact />
    </Layout>
    )
  }

  export default IndexPage
