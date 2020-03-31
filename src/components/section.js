import React from "react"
import PropTypes from "prop-types"
import {
  Row,
  Col
} from "react-bootstrap"

const Section = ({ section }) => {
  const { html, frontmatter } = section

  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>{frontmatter.title}</h2>
        </Col>
      </Row>

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
