import React from "react"
import PropTypes from "prop-types"
import {
  Row,
  Col
} from "react-bootstrap"

import ResourceCard from "./resourceCard"

Array.prototype.eachSlice = function (size){
  this.arr = []
  for (var i = 0, l = this.length; i < l; i += size){
    this.arr.push(this.slice(i, i + size))
  }
  return this.arr
}

const ResourceCards = ({ section, resources, perRow }) => (
  <>
  {section !== null && section !== "" ? (
    <Row className="mt-5">
      <Col xs={12}>
        <h2>{section}</h2>
      </Col>
    </Row>
  ) : ""}

  {resources.eachSlice(perRow).map((slice, index) => (
    <Row key={index}>
      {slice.map((link, index) => (
        <Col xs={12} lg={12/perRow} key={index} className="mb-5">
          <ResourceCard
            title={link.title}
            html={link.html}
            website={link.website}
            phone={link.phone}
          />
        </Col>
      ))}
    </Row>
  ))}
  </>
)

ResourceCards.propTypes = {
  section: PropTypes.string,
  resources: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    html: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string,
  })),
  perRow: PropTypes.number,
}

export default ResourceCards
