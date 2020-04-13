import React from "react"
import PropTypes from "prop-types"
import {
  Row,
  Col,
  Alert
} from "react-bootstrap"
import {
  FaInfoCircle,
  FaExclamationTriangle
} from "react-icons/fa"

const Section = ({ section }) => {
  const { html, frontmatter } = section

  const renderAlert = (html, frontmatter) => {
    return (
      <Row className="mb-5">
        <Col xs={12}>
          <Alert variant={frontmatter.style}>
            <Row>
              <Col xs={12} sm={2} className="d-flex align-items-center">
                {frontmatter.style === "info" ? (
                  <FaInfoCircle style={{
                    width: "3rem",
                    fontSize: "2rem",
                  }} className="mr-3" />
                ) : (
                  <FaExclamationTriangle style={{
                    width: "3rem",
                    fontSize: "2rem",
                  }} className="mr-3" />
                )}
                {frontmatter.title}
              </Col>
              <Col xs={12} sm={10}  dangerouslySetInnerHTML={{ __html: html }}/>
            </Row>
          </Alert>
        </Col>
      </Row>
    )
  }

  if (frontmatter.style === "info" || frontmatter.style === "warning") {
    return renderAlert(html, frontmatter)
  }

  return (
    <>
      {frontmatter.title !== null && frontmatter.title !== "" ? (
        <Row>
          <Col xs={12}>
            <h2>{frontmatter.title}</h2>
          </Col>
        </Row>
      ) : ""}

      <Row className="mb-5">
        <Col dangerouslySetInnerHTML={{ __html: html }}>
        </Col>
      </Row>
    </>
  )
}

Section.propTypes = {
  section: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      position: PropTypes.number,
    })
  }).isRequired
}

export default Section
