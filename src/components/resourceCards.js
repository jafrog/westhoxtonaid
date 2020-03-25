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

const ResourceCards = ({ resources, perRow }) => (
  <>
  {resources.eachSlice(perRow).map((slice, index) => (
    <Row key={index}>
      {slice.map((link, index) => (
        <Col xs={12} md={12/perRow} key={index} className="mb-5">
          <ResourceCard
            title={link.title}
            text={link.text}
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
  resources: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string,
  })),
  perRow: PropTypes.number,
}

export default ResourceCards