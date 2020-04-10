import React from "react"
import PropTypes from "prop-types"
import {
  Row,
  Col,
  Card
} from "react-bootstrap"
import { FaGlobe, FaPhone } from 'react-icons/fa'

const ResourceCard = ({ title, html, website, phone }) => {
  return (
    <Card className="h-100">
      <Card.Body className="mb-5">
        <Card.Title className="mb-5">{title}</Card.Title>

        <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
      </Card.Body>

      <Card.Footer>
        <Row>
          {website ? (
          <Col xs={12} className="mt-1">
            <Card.Link href={website} target="_blank" rel="noopener noreferrer" >
              <FaGlobe className="mr-1" />
              Website
            </Card.Link>
          </Col>
        ) : ""}

          {phone ? (
          <Col xs={12} className="mt-1">
            <Card.Link href="tel:{phone}">
              <FaPhone className="mr-1" />
              Phone
            </Card.Link>
          </Col>
        ) : ""}
        </Row>
      </Card.Footer>
  </Card>
  )
}

ResourceCard.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
}

export default ResourceCard
