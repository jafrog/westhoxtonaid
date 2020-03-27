import React from "react"
import { 
  Row,
  Col
} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceCards from "../components/resourceCards"

const resources = [
  {
    title: "Leafleting & flyering protocol",
    website: "https://docs.google.com/document/d/1tWWky3DI_4o01idxJqcP_GIUt4UxfTfrU02w67p41Hw/edit",
  },
  {
    title: "Delivering items to self-isolating people",
    website: "https://wiki.queercare.network/index.php?title=Delivering_items_to_someone_who_is_immunocompromised_protocol",
  }
]

const HealthPage = () => (
  <Layout>
    <SEO title="Health & safety" />
    <Row>
      <Col>
        
        <Row>
          <Col>
            <h1 className="display-4">Health & safety resources</h1>
          </Col>
        </Row>
        
        <p>
          We ask all our volunteers to operate in accordance with strict hygiene, data 
          protection, payment and safeguarding protocol when carrying out assistance work. 
          One of our HQ team goes through this protocol with all volunteers before they 
          carry out any task. We are currently compiling this guidance into one document 
          which will be available here in a few days' time.
        </p>
        
      </Col>
    </Row>
  </Layout>
)

export default HealthPage