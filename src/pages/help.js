import React from "react"
import { 
  Row,
  Col,
  Button 
} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelpPage = () => {
  return (
    <Layout>
      <SEO title="Volunteer" />
      <Row>
        <Col>
          <h1>I need help</h1>
    
          <p className="lead">Please put your request for help by clicking on the below link and then entering your details and request.</p>
          <p>We will then put you in touch with somebody who can help</p>
          <div className="d-flex justify-content-center">
            <Button href="https://forms.gle/AmbJRrdN4QJVcPVGA">Assistance request form</Button>
          </div>
          <p className="lead">Alternatively, you can get in touch via email or phone</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default HelpPage